import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:2323/spring-bank-mvc/accounts";
 
  constructor(private http:HttpClient) {
    console.log("EmployeeService created....");
   }

getAllEmployee():Observable<any>{
 return this.http.get(this.baseURL)
}

getEmployeeByAccno(accno:number):Observable<any>{
  return this.http.get(this.baseURL+"/"+accno);
 }

 deleteEmployeeByAccno(accno:number):Observable<any>{
  return this.http.delete(this.baseURL+"/"+accno);
 }
 updateEmployeeByAccno(accno:number,account:any):Observable<any>{
  return this.http.put(this.baseURL+"/"+accno,account);
 }


 addEmployee(account:any):Observable<any>{
  return this.http.post(this.baseURL,account);
 }




}
