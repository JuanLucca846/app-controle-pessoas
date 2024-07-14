import { Component } from '@angular/core';
import { IMenu } from './interfaces/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-angular';

  items: IMenu[] = [
    {
      name: 'Pessoas',
      url: '/profile',
    },
  ];
}
