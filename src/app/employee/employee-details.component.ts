import { Component, OnInit, Injectable, Input, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../services/employee-api.service';
import { DatepickerOptions } from 'ng2-datepicker';
import { ModalService } from '../modal/modal.component';
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
const createConfig = {
    name: {
        hidden: false,
        disabled: true
    },
    emp_id: {
        hidden: false,
        disabled: true
    },
    emp_type: {
        hidden: false,
        disabled: true
    },
    status: {
        hidden: false,
        disabled: true
    },
    email: {
        hidden: false,
        disabled: true
    },
    phone: {
        hidden: false,
        disabled: true
    },
    doj: {
        hidden: false,
        disabled: true
    },
    doe: {
        hidden: false,
        disabled: true
    },
    title: {
        hidden: false,
        disabled: true
    },
    role: {
        hidden: false,
        disabled: true
    },
};
const editConfig = {
    name: {
        hidden: false,
        disabled: true
    },
    emp_id: {
        hidden: false,
        disabled: true
    },
    emp_type: {
        hidden: false,
        disabled: true
    },
    status: {
        hidden: false,
        disabled: true
    },
    email: {
        hidden: false,
        disabled: true
    },
    phone: {
        hidden: false,
        disabled: true
    },
    doj: {
        hidden: false,
        disabled: true
    },
    doe: {
        hidden: false,
        disabled: true
    },
    title: {
        hidden: false,
        disabled: true
    },
    role: {
        hidden: false,
        disabled: true
    },
};
const viewConfig = {
    name: {
        hidden: false,
        disabled: true
    },
    emp_id: {
        hidden: false,
        disabled: true
    },
    emp_type: {
        hidden: false,
        disabled: true
    },
    status: {
        hidden: false,
        disabled: true
    },
    email: {
        hidden: false,
        disabled: true
    },
    phone: {
        hidden: false,
        disabled: true
    },
    doj: {
        hidden: false,
        disabled: true
    },
    doe: {
        hidden: false,
        disabled: true
    },
    title: {
        hidden: false,
        disabled: true
    },
    role: {
        hidden: false,
        disabled: true
    },
};

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
    configProp: Object;
    options: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        displayFormat: 'MMM D[,] YYYY',
        barTitleFormat: 'MMMM YYYY',
        firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
        locale: frLocale
    };
    constructor(private empDetails: EmpDetailsService,
        private empApi: EmployeeApiService,
        private modal: ModalService) {
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
        this.configProp = createConfig;
    }
    createEmp = () => {
        this.empApi.createEmployee(this.empData, this.createEmpSuccess, this.createEmpFailed);
    }
    createEmpSuccess() {
        this.modal.modalHeader = 'Employee Creation Success!!!';
        this.modal.modalBody = 'Employee created successfully.';
        this.modal.hideModal = false;
    }
    createEmpFailed = () => {
        this.modal.modalHeader = 'Employee Creation Failed!!!';
        this.modal.modalBody = 'Employee creation failed due to some reasion.';
        this.modal.hideModal = false;
    }
    ngOnInit() {
        this.titleList = titleList;
        this.statusList = statusList;
    }
}
