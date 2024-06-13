import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalThemeService {
  themeChanged: EventEmitter<string> = new EventEmitter<string>();
  private currentTheme: string = 'default';
  private localStorageKey = 'currentTheme';

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme() {
    const savedTheme = localStorage.getItem(this.localStorageKey);

    if (savedTheme) {
      this.currentTheme = savedTheme;
      this.themeChanged.emit(savedTheme);
    }
  }

  handleSelectedTheme(newTheme: string) {
    this.currentTheme = newTheme;
    localStorage.setItem(this.localStorageKey, newTheme);
    this.themeChanged.emit(newTheme);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }
}
