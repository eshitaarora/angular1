import { Component } from '@angular/core';

@Component({
  selector: 'app-about-header',
  standalone: true,
  imports: [],
  template: `
     <h1> {{appTitle}} </h1>
  `,
  styles: `
  `
})
export class AboutHeaderComponent {

  appTitle:string = 'Welcome to Angular development'
}