import { Component } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { Feature } from '../../feature';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FeatureComponent, NgIf],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {

  isVisible: boolean = false

  features: Feature[] = [
    new Feature('Power your development', 'Keep your codebase organized with an opinionated component model and flexible dependency injectionsystem'),
    new Feature('Ship with confidence', 'Verified commit-by-commit against Google colossal monorepo'),
    new Feature('Develop aplications faster', 'Effortlessly build, serve, test, deploy with Angular CLI')
  ]

  /**
   * What is an event? : Occurance of an action on some element, like mouse click, or key press. 
   * What is an event handler? : A function that responds when an event occurs on an element.
   */

  /**
   * This is an event handler that is designed to respond to a Mouse click event on the button.
   * Providing the event parameter is optional.
   * @param event type of MouseEvent
   */
  onButtonClick(event: MouseEvent): void {
    this.isVisible = !this.isVisible
  }

}