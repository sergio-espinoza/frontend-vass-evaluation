import { Component, Host, HostBinding } from '@angular/core';
import { ThemeNameService } from './core/theme-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class') componentCssClass: any;

  constructor(private themeNameSvc: ThemeNameService) {
    this.watchThemeName();
  }

  private watchThemeName(): void {
    this.themeNameSvc.getThemeName$().subscribe(themeName => {
      this.componentCssClass = themeName;
      this.themeNameSvc.setThemeName(themeName);
    });
  }
}
