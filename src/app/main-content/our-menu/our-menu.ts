import { Component } from '@angular/core';
import { TableWithOptions } from './table-with-options/table-with-options';

@Component({
  selector: 'app-our-menu',
  imports: [ TableWithOptions],
  templateUrl: './our-menu.html',
  styleUrl: './our-menu.scss'
})
export class OurMenu {

}
