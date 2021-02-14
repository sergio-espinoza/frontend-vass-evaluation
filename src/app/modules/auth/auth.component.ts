import { transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { nextAnimation, prevAnimation } from 'src/app/config';
import { ThemeNameService } from 'src/app/core/theme-name.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('PreviousPage => NextPage', nextAnimation),
      transition('NextPage => PreviousPage', prevAnimation),
    ])
  ],
})
export class AuthComponent {
  constructor(private themeNameSvc: ThemeNameService) { }

  public switchTheme(): void {
    this.themeNameSvc.switchThemeName$();
  }

  public prepareRoute(outlet: RouterOutlet): RouterOutlet | Data | string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
