import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employee } from 'src/models/employee.class';
import { DialogAddEmpComponent } from '../dialog-add-emp/dialog-add-emp.component';
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
 emp : Employee = new Employee();
 allEmployees =[];
 filterd = false;
  constructor(public dialog: MatDialog, public empService: EmployeeService ) { }

  ngOnInit(): void {
    this.empService.getAllEmployees();
    
  }

  openDialog(): void {
    this.dialog.open(DialogAddEmpComponent);
  }

  showDetails(index: number){
    
    console.log(this.empService.allEmployees[index]['id'])
  }

  showFilter(){
 let inputValue = +(<HTMLInputElement>document.getElementById('filterInput')).value;
 this.filterd = true;
this.empService.filterById(inputValue);
console.log(this.empService.filterdEmp);
(<HTMLInputElement>document.getElementById('filterInput')).value = "";

 }

resetFilter(){
  this.filterd = false;
}

}
