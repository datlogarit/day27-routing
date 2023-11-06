import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() checked_var: boolean = true;
  @Output() checked_varChange = new EventEmitter<boolean>()
  toggle() {
    this.checked_var = !this.checked_var
    this.checked_varChange.emit(this.checked_var)
  }
}
