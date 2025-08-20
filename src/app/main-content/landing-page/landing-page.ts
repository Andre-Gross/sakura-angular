import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Navbar } from './navbar/navbar'

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        CommonModule,
        Navbar],
    template: `
    <section>
        <app-navbar></app-navbar>
        <div id="header-container">
            <h1 class="fontRaleway">SAKURA RAMEN</h1>
            <h2 class="fontRaleway">THE BEST RAMEN IN TOWN</h2>
        </div>
    </section>`,
    styleUrls: ['./landing-page.scss']
})
export class LandingPage { }