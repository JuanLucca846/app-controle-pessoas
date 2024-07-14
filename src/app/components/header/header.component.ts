import { Component, Input } from '@angular/core';
import { IMenu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() items: IMenu[] = [];
}
