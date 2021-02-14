import { Component } from '@angular/core';
import { ThemeNameService } from 'src/app/core/theme-name.service';

@Component({
  selector: 'app-nav-config',
  templateUrl: './nav-config.component.html',
  styleUrls: ['./nav-config.component.scss']
})
export class NavConfigComponent {

  public themeColorButtons = [
    { themeName: 'unicorn-light-theme', color: '#ffd740', backgroundColor: '#ffffff' },
    { themeName: 'unicorn-dark-theme', color: '#ffd740', backgroundColor: '#262626' },
    { themeName: 'candy-light-theme', color: '#ff4081', backgroundColor: '#ffffff' },
    { themeName: 'candy-dark-theme', color: '#ff4081', backgroundColor: '#262626' },
    { themeName: 'light-theme', color: '#aa00ff', backgroundColor: '#ffffff' },
    { themeName: 'dark-theme', color: '#aa00ff', backgroundColor: '#262626' },
  ];

  constructor(
    private themeNameSvc: ThemeNameService
  ) { }

  public changeThemeColor(themeName: string): void {
    this.themeNameSvc.setThemeName$(themeName);
  }

  public changeFontFamily(fontFamily: string): void {
    this.themeNameSvc.setFontFamily(fontFamily);
  }

  public select(event: any): void {
  }

}
