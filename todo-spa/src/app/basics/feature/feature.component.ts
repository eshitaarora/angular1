import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

  @Input({ required: true }) title: string = ''
  @Input({ required: true }) description: string = ''

  /**
   * Usage 
   * <app-feature [title]="'title name'" [description]="'title description'" />
   */
}