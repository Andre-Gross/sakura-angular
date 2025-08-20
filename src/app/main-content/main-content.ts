import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';
import { OurMenu } from './our-menu/our-menu';
import { HowToOrder } from './how-to-order/how-to-order';

@Component({
  selector: 'app-main-content',
  imports: [
    LandingPage,
    OurMenu,
    HowToOrder],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
