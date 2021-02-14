import { style, query, animateChild, group, animate } from '@angular/animations';

export const nextAnimation = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    })
  ], { optional: true }),
  query(':enter', [
    style({ left: '100%' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('600ms ease-out', style({ left: '-100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease-out', style({ left: '0%' }))
    ])
  ]),
  query(':enter', animateChild()),
];

export const prevAnimation = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    })
  ], { optional: true }),
  query(':enter', [
    style({ left: '-100%' })
  ]),
  query(':leave', animateChild(), { optional: true }),
  group([
    query(':leave', [
      animate('600ms ease-out', style({ left: '100%' }))
    ], { optional: true }),
    query(':enter', [
      animate('600ms ease-out', style({ left: '0%' }))
    ])
  ]),
  query(':enter', animateChild()),
];

