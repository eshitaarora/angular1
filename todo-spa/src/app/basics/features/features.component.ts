import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {


}