import { Component } from '@angular/core';
import { Menu } from './interfaces/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-angular';

  items: Menu[] = [
    {
      name: 'Inicio',
      url: '/home',
    },
    {
      name: 'Pessoas',
      url: '/profile',
    },
  ];
}
