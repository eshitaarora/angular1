import { Component } from '@angular/core';
import { AboutHeaderComponent } from '../about-header/about-header.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  // not present in angular 16
  standalone: true, 
  // not present in angular 16
  imports: [AboutHeaderComponent, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  features: string[] = [
    'Developed by google',
    'Uses typescript',
    'Opensource',
    'Hugely adopted',
    'Highly popular'
  ]
}