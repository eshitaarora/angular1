import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './basics/about/about.component';
import { FeaturesComponent } from './basics/features/features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, FeaturesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}