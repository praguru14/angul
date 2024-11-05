import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'] 
})
export class ParentComponent {
  press: boolean = true;

onInputChange(event: Event) {
  const input = event.target as HTMLInputElement; 
  this.press = input.value.trim().length === 0; 
}

  isPress() {
    this.press = !this.press; 
  }
}
