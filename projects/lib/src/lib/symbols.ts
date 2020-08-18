import { InjectionToken } from '@angular/core';

export interface Options {
  /**
   * Color of spinner and progress bar.
   *
   * Default color style attributes format ('#0984e3', 'rgb(169, 86, 90)', ...)
   */
  color?: string;
  /**
   * Show and hide circle spinner
   */
  showSpinner?: boolean;
  /**
   * Show and hide progress bar
   */
  showBar?: boolean;
  /**
   * If true set indeterminate bar style, like Material
   */
  indeterminate?: boolean;
  /**
   * Height of progress bar.
   *
   * Default height style attributes format ('1px', '1%', ...)
   */
  barHeight?: string;
  /**
   * Width of spinner.
   *
   * Default width style attributes format ('5px', '5%', ...)
   */
  spinnerDiameter?: string;
  /**
   * The starting value of progress bar (from 1 to 100)
   */
  initialValue?: number;
  /**
   * Show or hide overlay
   */
  overlay?: boolean;
  /**
   * Set overlay value (opacity)
   */
  overlayValue?: number;
  /**
   * Set spinner speed, from 1 to 10
   */
  spinnerSpeed?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  /**
   * Filter the HTTP requests that would like to be avoided
   */
  whitelist?: string[];
}

export const OPTIONS = new InjectionToken('OPTIONS');

export const getOptions = (options: Options): Options => ({
  color: options.color ?? '#0984e3',
  showSpinner: options.showSpinner ?? true,
  showBar: options.showBar ?? true,
  indeterminate: options.indeterminate ?? false,
  barHeight: options.barHeight ?? '1px',
  spinnerDiameter: options.spinnerDiameter ?? '10px',
  initialValue: options.initialValue ?? 0,
  overlay: options.overlay ?? true,
  overlayValue: options.overlayValue ?? 1,
  spinnerSpeed: options.spinnerSpeed ?? 4,
  whitelist: options.whitelist ?? [],
});
