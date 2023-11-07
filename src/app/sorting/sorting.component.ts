import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  sorting = 'sorting works'
  colors: string[] = ['white', 'green', 'blue'];
  currentColor: number = 0;
  buttonColor: string = this.colors[this.currentColor];

  changeButtonColor() {
    this.currentColor = (this.currentColor + 1) % this.colors.length;
    this.buttonColor = this.colors[this.currentColor];
    console.log(this.buttonColor);

  }

}
