import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeApiService } from '../services/employee-api.service';
import { DatePipe } from '@angular/common';
import { ModalService } from '../modal/modal.component';
import { DataTranseferService } from '../services/data-transefer.service';

interface Employee {
  id: string;
  emp_id: string;
  emp_name: string;
  emp_title: string;
  emp_status: string;
  emp_doj: Date;
  emp_email: string;
  emp_phone: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeApiService]
})
export class EmployeeComponent implements OnInit {
  employeeList: Array<Employee>;
  empData: Employee;
  isDisabled:boolean=false;
  hideEmpDetails: boolean = true;
  isEditRequest:boolean=false;
  constructor(private router: Router,
    private empApi: EmployeeApiService,
    private modal: ModalService,
    private dataTransfer: DataTranseferService) {
    console.log("hello");
    this.employeeList = [];
    this.empData = {
      id: '',
      emp_id: '',
      emp_name: '',
      emp_title: '',
      emp_status: '',
      emp_doj: null,
      emp_email: '',
      emp_phone: ''
    };
    this.displayEmpList();
    let emp_id = dataTransfer.getEmp_id();
    if(emp_id !=null)
      this.getEmployeeDetails(emp_id);
  }
  displayEmpList = () => {
    const empListSuccess = (data) => {
      console.log(data);
      this.employeeList = data;
    };
    const empListFailed = (err) => {
      alert(err);
    };
    this.empApi.employeeList(empListSuccess, empListFailed);
  }
  ngOnInit() {
  }

  closeEmpDetails = () => {
  }

  getEmployeeDetails = (emp_id) => {

    const empDetailSuccess = (data) => {
      this.isDisabled=true;
      if (data.status === 304) {
        console.log("empID: ", this.employeeList.find(currentElement => currentElement.emp_id === emp_id));
      } else {
        this.empData = data;
        this.empData.emp_doj = new Date(data.doj);
        console.log(this.empData.emp_doj);
      }
      this.hideEmpDetails = false;
    }

    const empDetailsFailed = (err) => {
      console.log(err);
    }

    console.log(emp_id);
    this.empApi.empDetail(emp_id, empDetailSuccess, empDetailsFailed);
    //console.log(this.empDetails.name);
  }

  editEmployee=()=>{
    this.isDisabled=false;
    this.isEditRequest=true;
  }

  saveEmployee =() =>{

    const empSaveSucess = (data) =>{
      console.log(data);
    }

    const empSaveFailed = (err) =>{
      console.log(err);
    } 
    if(this.isEditRequest){
      this.empApi.editEmployee(this.empData,empSaveSucess,empSaveFailed);
      this.modal.modalHeader = 'Success!';
      this.modal.modalBody = 'Employee Details Editied Successfully!';
      this.modal.hideModal = false;
    }else{
      this.empApi.createEmployee(this.empData,empSaveSucess,empSaveFailed);
      this.modal.modalHeader = 'Success!';
      this.modal.modalBody = 'Employee Details Saved Successfully!';
      this.modal.hideModal = false;
    }
    this.isDisabled=true;
    this.isEditRequest=false;
    
  }

  search = (searchFor:string) =>{
    
  }
}
