import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.component';
import { ProjectApiService } from '../services/project-api.service';
import { EmployeeApiService } from '../services/employee-api.service';
import { EmployeeComponent } from '../employee/employee.component';
import { Router } from '@angular/router';
import { DataTranseferService } from '../services/data-transefer.service';

interface Project {
  id: string;
  proj_name: string;
  proj_mngr_id: string;
  proj_mngr_name: string;
  proj_team: [string];
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectApiService]
})
export class ProjectComponent implements OnInit {
  projectList: Array<Project>
  projData: Project;
  isDisabled: boolean = false;
  showProjDetails: boolean = true;

  constructor(private projApi: ProjectApiService,
    private modal: ModalService,
    private router: Router,
    private dataTransfer: DataTranseferService) {
    console.log("hello");
    this.projectList = [];
    this.projData = {
      id: '',
      proj_name: '',
      proj_mngr_id: '',
      proj_mngr_name: '',
      proj_team: null
    };
    this.displayProjList();
  }

  ngOnInit() {
  }

  displayProjList = () => {
    const projListSuccess = (data) => {
      this.projectList = data;
      console.log(this.projectList);
    };
    const projListFailed = (err) => {
      alert(err);
    };
    this.projApi.projectList(projListSuccess, projListFailed);
  }

  getProjectDetails = (proj_id) => {
    const projDetailSuccess = (data) => {
      this.isDisabled = true;
      if (data.status === 304) {
        console.log("empID: ", this.projectList.find(currentElement => currentElement.id === proj_id));
      } else {
        this.projData.proj_name = data.proj_name;
        this.projData.proj_mngr_id = data.proj_mngr_id;
        this.projData.proj_mngr_name = data.proj_mngr_name;
      }
    }
    const projDetailsFailed = (err) => {
      console.log(err);
    }
    this.showProjDetails = false;
    this.projApi.projDetail(proj_id, projDetailSuccess, projDetailsFailed);
  }

  getProjectManager =(emp_id) =>{
    this.dataTransfer.setEmp_id(emp_id);
    this.router.navigate(['home/employee']);
  }
}
