import { Injectable } from '@angular/core';

@Injectable()
export class DataTranseferService {

  constructor() { }

  emp_id:string;

  setEmp_id=(emp_id:string)=>{
    this.emp_id=emp_id;
  }

  getEmp_id=()=>{
    return this.emp_id;
  }
}
