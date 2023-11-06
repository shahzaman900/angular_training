import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {

  buttonColor: string = 'blue'

  sorting() {
    this.buttonColor = "red"
  }

}
