import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  title='Account CRUD Application'

  accounts:any[];

  account:any;

  message="";


  add=false;
  save=false;

  constructor(private es:EmployeeService) { 
    console.log("EmployeeCrudComponent created...")
  }

  ngOnInit() {
    this.getAllEmployee();
    console.log("EmployeeCrudComponent initialized...")
  }
  
  ngOnDestroy() {
    console.log("EmployeeCrudComponent destroyed...")
  }
  getAllEmployee(){

    this.es.getAllEmployee()
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);

  }
  newEmployee(){
    this.add=false;
    this.save=true; 
    this.account={
      accno:0,
      name:'',
      balance:0.0,
      email:'',
      mobile:'',
      pan:'',
      doc:new Date()
    }

  }

  getEmployeeByAccno(accno:number){

    this.es.getEmployeeByAccno(accno)
           .subscribe(response=>this.account=response,
                       error=>this.message=error);

  
          this.add=true;
          this.save=false;                    

  
  }
  deleteEmployeeByAccno(accno:number){

    this.es.deleteEmployeeByAccno(accno)
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);

  }

  updateEmployeeByAccno(accno:number){

    this.es.updateEmployeeByAccno(accno,this.account)
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);

                       this.account=null;
                       
  }

  addAccount(){

    this.es.addEmployee(this.account)
           .subscribe(response=>this.accounts=response,
                       error=>this.message=error);
                       this.account=null;

  }


}
