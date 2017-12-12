import { Component, OnInit, Injectable, Input, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../services/employee-api.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

const titleList = [
    {
        id: 'Consultant',
        name: 'Consultant'
    },
    {
        id: 'Senior Consultant',
        name: 'Senior Consultant'
    }, {
        id: 'Team Lead',
        name: 'Team Lead'
    }, {
        id: 'Technical Manager',
        name: 'Technical Manager'
    }, {
        id: 'Delivery Manager',
        name: 'Delivery Manager'
    }, {
        id: 'Delivery Head',
        name: 'Delivery Head'
    }];
const statusList = ['Deployable', 'Blocked', 'Soft Blocked', 'Long Leave', 'Resigned'];
interface Employee {
    name: string;
    emp_id: string;
    emp_type: string;
    status: string;
    email: string;
    phone: number;
    doj: string;
    doe: string;
    title: string;
    role: string;
}

@Injectable()
export class EmpDetailsService {
    EmpData = {};
    hideEmpDetails = true;
}

@Component({
    moduleId: module.id,
    selector: 'app-employee-detail',
    templateUrl: 'employee-details.component.html',
    styleUrls: ['./employee.component.css'],
    providers: [EmpDetailsService, EmployeeApiService]
})
export class EmployeeDetailsComponent implements OnInit {
    empData: Employee;
    titleList: Array<Object>;
    statusList: Array<string>;
    options: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
        locale: frLocale
    };
    constructor(private empDetails: EmpDetailsService,
        private empApi: EmployeeApiService) {
        this.empData = {
            name: 'Devinder Suthwal',
            emp_id: 'XI619',
            emp_type: 'Permanent',
            status: 'Deployable',
            email: 'd.shutwal@gmail.com',
            phone: 969270067,
            doj: '2017-01-16', // date(yyyy-mm-dd)
            doe: '2999-12-31',
            title: 'Senior Consultant',
            role: 'Developer'
        };
    }
    createEmp = () => {
        this.empApi.createEmployee(this.empData);
    }
    ngOnInit() {
        this.titleList = titleList;
        this.statusList = statusList;
    }
}
