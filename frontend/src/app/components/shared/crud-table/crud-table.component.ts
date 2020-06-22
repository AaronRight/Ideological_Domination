import { Input, Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { Fielded } from "../../models/fielded.interface";

@Component({
  selector: "crud-table",
  templateUrl: "./crud-table.component.html",
  styleUrls: ["./crud-table.component.css"],
  host: {
    class: "crud-table",
  },
})
export class CrudTableComponent implements OnInit {
  @Input("loadData") loadData: Function;
  @Input("model") model: Fielded;

  @Input("addDialog") addDialog: Function;
  @Input("editDialog") editDialog: Function;
  @Input("deleteDialog") deleteDialog: Function;

  displayedColumns: Array<string>;

  constructor(public httpClient: HttpClient, public dialog: MatDialog) {}

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  public dataSource;

  ngOnInit() {
    this.refresh();
    this.displayedColumns = [...this.model.getFields(), "actions"];
  }

  refresh() {
    this.loadData().subscribe((value: any[]) => {
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.paginator = this.paginator;
    });
  }
}
