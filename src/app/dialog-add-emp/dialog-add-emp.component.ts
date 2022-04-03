import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee.class';
import { EmployeeService } from '../employee.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-emp',
  templateUrl: './dialog-add-emp.component.html',
  styleUrls: ['./dialog-add-emp.component.scss']
})
export class DialogAddEmpComponent implements OnInit {
  emp : Employee = new Employee();

  firstName?: string;
  lastName?: string;
  email?: string;
  id?: number;
  constructor(public empService: EmployeeService, public dialogRef: MatDialogRef<DialogAddEmpComponent>) { }

  ngOnInit(): void {
  }

  toJSON(){
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        id: this.id
    }
}

  saveEmp(){
    console.log('new employee', this.emp);
   let newEmp = this.emp.toJSON();

    this.empService.saveEmp(newEmp);
    this.dialogRef.close();
  }

}
