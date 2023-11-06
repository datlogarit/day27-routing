import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
@Input() progress = 50;
@Input() backgroundColor = 'gray';
@Input() progressColor = 'green';
}
