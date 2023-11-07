import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortStateModel } from './sorting.model';
// interface SortModel {
//   sortState: "NO-SORT" | "ASC" | "DESC"
//   icon: 'swap_vert' | 'arrow_upward' | 'arrow_downward'
// };

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent {
  @Output() sortChanged = new EventEmitter();
  @Input() sortName: string = "NO-NAME"
  @Input() sortState: SortStateModel = "NO-SORT";

  sortModel: { [sortState: string]: string } = {
    "NO-SORT": "swap_vert",
    "ASC": "arrow_upward",
    "DESC": "arrow_downward"
  };

  changeSortState() {
    if (this.sortState == "NO-SORT") this.sortState = "ASC";
    else if (this.sortState == "ASC") this.sortState = "DESC";
    else if (this.sortState == "DESC") this.sortState = "NO-SORT";

    this.sortChanged.emit({ "sortName": this.sortName, sortState: this.sortState });
  }

}
