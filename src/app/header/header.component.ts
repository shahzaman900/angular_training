import { Component } from '@angular/core';
import { SortStateModel } from '../sorting/sorting.model';
interface ColumnConfig { name: string, title: string, sortState: SortStateModel };
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  columnConfig: ColumnConfig[] =
    [
      { name: "person", title: "Person", sortState: "NO-SORT" },
      { name: "person.country", title: "Country", sortState: "NO-SORT" },
      { name: "phone", title: "Phone Number", sortState: "NO-SORT" }
    ];
  onSortChanged(sortModel: any) {
    console.log(sortModel);
    for (let i = 0; i < this.columnConfig.length; i++) {
      this.columnConfig[i].sortState = "NO-SORT";
      if (sortModel["sortName"] == this.columnConfig[i].name)
        this.columnConfig[i].sortState = sortModel["sortState"];
    }

    // this.columnConfig =
    //   [
    //     { name: "person", title: "Person1", sortState: "ASC" },
    //     { name: "person.country", title: "Country", sortState: "ASC" },
    //     { name: "phone", title: "Phone Number", sortState: "ASC" }
    //   ];

  }

  showName(event: any) {
    console.log(event.target.innerText);
  }
}
