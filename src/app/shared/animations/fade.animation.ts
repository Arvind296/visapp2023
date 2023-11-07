import { trigger, animate, transition, style, query, keyframes } from '@angular/animations';
import * as kf from './keyframes';

export const fadeAnimation =

  trigger('fadeAnimation', [

    transition('* => visit', [
      query(':enter', [animate(9000, keyframes(kf.swing))], { optional: true }),
      query(':leave', [animate(9000, keyframes(kf.wobble))], { optional: true }),
      query(':enter', [animate(9000, keyframes(kf.jello))], { optional: true })
    ]),
    transition('visit => *', [
      query(':enter', [animate(9000, keyframes(kf.wobble))], { optional: true }),
      query(':leave', [animate(9000, keyframes(kf.zoomOutRight))], { optional: true }),
      query(':enter', [animate(9000, keyframes(kf.rotateOutUpRight))], { optional: true })
    ]),
    transition('* => *', [
      query(':enter', [animate(9000, keyframes(kf.swing))], { optional: true }),
      query(':leave', [animate(9000, keyframes(kf.wobble))], { optional: true }),
      query(':enter', [animate(9000, keyframes(kf.swing))], { optional: true })
    ])

  ]);