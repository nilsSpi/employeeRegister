import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from 'src/models/employee.class';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  allEmployees = [];
  filterdEmp : any;
  

  constructor(public firestore: AngularFirestore) {

   }

   

   saveEmp(object:any){
     this.firestore
     .collection('employees')
     .add(object)
     .then((result:any) => {
       console.log("this emp will be added:",result)
       
     })
   }

   getAllEmployees(){
     this.firestore
     .collection('employees')
     .valueChanges()
     .subscribe((changes : any)=>{
        
        this.allEmployees = changes;
        console.log("all employees", this.allEmployees)
     })
   }

   filterById(id : number){
     this.allEmployees.forEach((e)=>{
       if(e['id'] == id){
         this.filterdEmp = e
       }
     })
   }

   isIdPresent(id:number): boolean{
     let statment = false
    this.allEmployees.forEach((e)=>{
      if(e['id'] == id){
        statment = true;
      }
     
    })
    return statment;
   }
}
