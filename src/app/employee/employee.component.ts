import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpDetailsService } from './employee-details.component';
interface Employee {
  id: string;
  name: string;
  title: string;
  status: string;
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmpDetailsService]
})

export class EmployeeComponent implements OnInit {
  employeeDetails: Array<Employee>;
  empData: Employee;
  constructor( private router: Router,
  private empDetails: EmpDetailsService ) {
  this.employeeDetails = [{
      id: 'XI619',
      name: 'Devinder Suthwal',
      title: 'Senior Consultant',
      status: 'Soft Blocked'
    },
    {
      id: 'XI620',
      name: 'Avanish Jain',
      title: 'Delivey Manager',
      status: 'Reigned'
    },
    {
      id: 'XI621',
      name: 'Panna Das',
      title: 'Consultant',
      status: 'Long Leave'
    },
    {
      id: 'XI622',
      name: 'Abhijeet Jain',
      title: 'Tranee',
      status: 'Deployable'
    },
    {
      id: 'XI623',
      name: 'Kapil Chaudari',
      title: 'Consultant',
      status: 'Staffed'
    }
  ];
  this.empData = {
      id: 'XI619',
      name: 'Devinder Suthwal',
      title: 'Senior Consultant',
      status: 'Soft Blocked'
    };
  }

  ngOnInit() {
  }
  viewEmployeeDetails = (id) => {
    this.empData = {
      id: 'XI619',
      name: 'Devinder Suthwal',
      title: 'Senior Consultant',
      status: 'Soft Blocked'
    };
    this.router.navigate(['/home/' + this.empData.id]);
  }
  closeEmpDetails = () => {
    this.router.navigate(['/home/' + this.empData.id]);
    // this.empDetails.hideEmpDetails = true;
  }
}
