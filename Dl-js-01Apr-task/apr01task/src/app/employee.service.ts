import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees()
  {
    return [
     
        {"name":"san","id":21},
        {"name":"jay","id":75},
        {"name":"veer","id":25}
      
    ];
  }
}
