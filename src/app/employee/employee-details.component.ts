import { Component, OnInit, Injectable, Input, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeApiService } from '../services/employee-api.service';
import { DatepickerOptions } from 'ng2-datepicker';
import { ModalService } from '../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
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
    phone: string;
    doj: string;
    doe: string;
    title: string;
    role: string;
}
const createConfig = {
    name: {
        hidden: false,
        disabled: false
    },
    emp_id: {
        hidden: false,
        disabled: false
    },
    emp_type: {
        hidden: false,
        disabled: false
    },
    status: {
        hidden: false,
        disabled: false
    },
    email: {
        hidden: false,
        disabled: false
    },
    phone: {
        hidden: false,
        disabled: false
    },
    doj: {
        hidden: false,
        disabled: false
    },
    doe: {
        hidden: false,
        disabled: false
    },
    title: {
        hidden: false,
        disabled: false
    },
    role: {
        hidden: false,
        disabled: false
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
    empID = 'XI619';
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
    isSave: Boolean = false;
    empID: string;
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
        private modal: ModalService,
        private route: ActivatedRoute,
        private router: Router) {
        this.empData = {
            name: '',
            emp_id: '',
            emp_type: '',
            status: '',
            email: '',
            phone: '',
            doj: null,
            doe: null,
            title: '',
            role: ''
        };
        this.empID = this.route.snapshot.params['emp_id'];
        if (this.empID) {
            this.configProp = viewConfig;
            this.displayEmpDetail(this.empID);
        } else {
            this.configProp = createConfig;
            this.isSave = true;
        }
    }
    displayEmpDetail = (empID) => {
        const empListSuccess = (data) => {
            this.empData = data;
            const empData = new Date(data.doj);

            this.empData.doj = `${empData.getFullYear()}-${empData.getMonth()}-${empData.getDate()}`;
            // this.empData.doj = new Date();
        };
        const empListFailed = (err) => {
            alert(err);
        };
        this.empApi.empDetail(empID, empListSuccess, empListFailed);
    }
    editEmpDetails = () => {
        this.configProp = createConfig;
        this.isSave = true;
    }
    createEmp = () => {
        this.configProp = viewConfig;
        const empData = {
            name: this.empData.name,
            emp_id: this.empData.emp_id,
            emp_type: this.empData.emp_type,
            status: this.empData.status,
            email: this.empData.email,
            phone: this.empData.phone,
            doj: this.empData.doj,
            // doe: this.empData.doe,
            title: this.empData.title,
            role: this.empData.role
        };
         if (this.empID) {
            this.empApi.editEmployee(empData, this.createEmpSuccess, this.createEmpFailed);
        } else {
            this.empApi.createEmployee(empData, this.createEmpSuccess, this.createEmpFailed);
        }
    }
    createEmpSuccess = () => {
        this.modal.modalHeader = 'Employee Creation Success!!!';
        this.modal.modalBody = 'Employee created successfully.';
        this.modal.hideModal = false;
        this.isSave = false;
    }
    createEmpFailed = () => {
        this.modal.modalHeader = 'Employee Creation Failed!!!';
        this.modal.modalBody = 'Employee creation failed due to some reasion.';
        this.modal.hideModal = false;
        this.isSave = false;
    }
    ngOnInit() {
        this.titleList = titleList;
        this.statusList = statusList;
    }
}
