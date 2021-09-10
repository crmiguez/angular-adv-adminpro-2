import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/green-dark.css';

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
   }

   changeTheme( theme: string ){
    const url = `http://localhost:4200/assets/css/colors/${ theme }.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();

  }

  checkCurrentTheme(){

    const links = document.querySelectorAll('.selector');

    links.forEach( elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `http://localhost:4200/assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }
    })
  }
}
