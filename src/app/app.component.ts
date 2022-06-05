import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import { DatePipe } from '@angular/common';


const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', create_Date: new Date('2022-06-01')},
  {position: 2, name: 'Helium', create_Date: new Date('2022-06-02')},
  {position: 3, name: 'Lithium', create_Date: new Date('2022-06-03')},
  {position: 4, name: 'Beryllium', create_Date: new Date('2022-06-04')},
  {position: 5, name: 'Boron', create_Date: new Date('2022-06-05')},
  {position: 6, name: 'Carbon', create_Date: new Date('2022-06-06')},
  {position: 7, name: 'Nitrogen', create_Date: new Date('2022-06-07')},
  {position: 8, name: 'Oxygen', create_Date: new Date('2022-06-08')},
  {position: 9, name: 'Fluorine', create_Date: new Date('2022-06-09')},
  {position: 10, name: 'Neon', create_Date: new Date('2022-06-10')},
  {position: 11, name: 'Sodium', create_Date: new Date('2022-06-17')},
  {position: 12, name: 'Magnesium', create_Date: new Date('2022-06-27')},
  {position: 13, name: 'Aluminum', create_Date: new Date('2022-06-57')},
  {position: 14, name: 'Silicon', create_Date: new Date('2022-06-37')},
  {position: 15, name: 'Phosphorus', create_Date: new Date('2022-06-27')},
  {position: 16, name: 'Sulfur', create_Date: new Date('2022-06-27')},
  {position: 17, name: 'Chlorine', create_Date: new Date('2022-06-29')},
  {position: 18, name: 'Argon', create_Date: new Date('2022-06-30')},
  {position: 19, name: 'Potassium', create_Date: new Date('2022-06-01')},
  {position: 20, name: 'Calcium', create_Date: new Date('2022-06-05')},
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'create_Date'];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // pipe: DatePipe;
  filterForm = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl(),
  });

  get fromDate() { return this.filterForm.value.fromDate; }
  get toDate() { return this.filterForm.value.toDate; }

  constructor(){
    // this.pipe = new DatePipe('en');
    // this.dataSource.filterPredicate = (data, filter) =>{
    //   if (this.fromDate && this.toDate) {
    //     return data.created >= this.fromDate && data.created <= this.toDate;
    //   }
    //   return true;
    // }
  }

  applyFilter(filterValue: any) {
    console.log(filterValue.target.value);
    
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
