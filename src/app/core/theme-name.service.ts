import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeNameService {
  public currentThemeName = 'light-theme';
  public currentThemeName$ = new BehaviorSubject<string>('light-theme');

  constructor(
    private overlayContainer: OverlayContainer
  ) { }

  public getThemeName$(): Observable<string> {
    return this.currentThemeName$.asObservable();
  }

  public setThemeName(themeName: string): void {
    this.overlayContainer.getContainerElement().classList.add(themeName);
  }

  public setFontFamily(fontFamily: string): void {
    this.overlayContainer.getContainerElement().setAttribute('font-family', fontFamily);
  }

  public switchThemeName$(): void {
    this.currentThemeName = this.currentThemeName.includes('light-theme') ? 'dark-theme' : 'light-theme';
    this.currentThemeName$.next(this.currentThemeName);
  }
  public setThemeName$(themeName: string): void {
    this.currentThemeName = themeName;
    this.currentThemeName$.next(themeName);
  }
}
