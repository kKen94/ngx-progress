import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NgxProgressService } from './ngx-progress.service';
import { RegisterService } from './register.service';
import { OPTIONS, Options } from './symbols';

@Component({
  selector: 'ngx-progress',
  templateUrl: './ngx-progress.component.html',
  styleUrls: ['ngx-progress.component.scss'],
})
export class NgxProgressComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(OPTIONS) public readonly options: Options,
    public readonly progressService: NgxProgressService,
    private readonly self: ElementRef<NgxProgressComponent>,
    private readonly register: RegisterService,
  ) {}

  ngOnDestroy(): void {
    this.register.unregisterBar(this.self);
  }

  ngOnInit(): void {
    this.register.registerBar(this.self);
  }
}
