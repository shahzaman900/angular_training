import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {


  colors: string[] = ['red', 'green', 'blue'];
  currentColorIndex: number = 0;
  buttonColor: string = this.colors[this.currentColorIndex];

  changeButtonColor() {
    this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    this.buttonColor = this.colors[this.currentColorIndex];
  }

  // buttonColor: string = 'white'
  // status: number = 1

  // sorting() {
  //   // if (this.status === 1) {
  //   //   this.buttonColor = 'blue'
  //   // } if (this.status === 2) {
  //   //   this.buttonColor = 'green'
  //   // } else {
  //   //   this.buttonColor
  //   // }
  //   // this.status++
  // }

}
