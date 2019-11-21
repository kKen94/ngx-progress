import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, timer, of, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

interface IState {
  value: number;
  requests: number;
}

@Injectable({ providedIn: 'root' })
export class BarService {
  private readonly state$ = new BehaviorSubject<IState>({
    requests: 0,
    value: undefined,
  });

  readonly progress$ = this.state$.pipe(
    switchMap(s => this.timer$(s)),
    map(s => s.value),
  );

  private readonly timer$ = (s: IState) => {
    let state$: Observable<IState> = of(s);
    if (!isPlatformBrowser(this.platformId)) {
      state$ = of({ value: 0, requests: 0 });
    } else if (s.requests === 0) {
      // Attempt to aggregate any start/complete calls within 500ms:
      state$ =
        s.value === 0
          ? of(s)
          : timer(0, 500).pipe(
              take(2),
              map(t => ({ requests: 0, value: t === 1 ? 0 : 100 })),
            );
    } else if (s.requests) {
      state$ = timer(0, 250).pipe(map(t => (t === 0 ? { ...s } : { ...s, value: this._increment() })));
    }

    return state$.pipe(
      tap(next => {
        this.setState(next, false);
      }),
    );
  };

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  start(initialValue = 2): void {
    this.setState({
      requests: this.state.requests + 1,
      value: !this.state.value ? initialValue : this.state.value,
    });
  }

  stop(): void {
    this.setState({ requests: 0 });
  }

  complete(): void {
    if (this.state.requests > 0) {
      this.setState({ requests: (this.state.requests || 1) - 1 });
    }
  }

  /**
   * Set the loading bar's width to a certain percent.
   *
   * @param n any value between 0 and 100
   */
  set(n: number): void {
    this.setState({ value: n });
  }

  /**
   * Increments the loading bar by a random amount
   * but slows down as it progresses
   */
  increment(rnd = 0): void {
    this.set(this._increment(rnd));
  }

  private get state(): IState {
    return this.state$.value;
  }
  private setState(state: Partial<IState>, emitEvent = true): void {
    emitEvent
      ? this.state$.next({ ...this.state$.value, ...state })
      : Object.keys(state).forEach(prop => (this.state[prop] = state[prop]));
  }

  private _increment(rnd = 0): number {
    const stat = this.state.value;
    if (stat >= 99) {
      rnd = 0;
    }

    if (rnd === 0) {
      rnd =
        stat >= 0 && stat < 25
          ? Math.random() * (5 - 3 + 1) + 3
          : (rnd =
              stat >= 25 && stat < 65
                ? Math.random() * 3
                : (rnd = stat >= 65 && stat < 90 ? Math.random() * 2 : (rnd = stat >= 90 && stat < 99 ? 0.5 : 0)));
    }

    return rnd + stat;
  }
}
