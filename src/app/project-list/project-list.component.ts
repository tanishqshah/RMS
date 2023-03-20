import { Component } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  data = [
    {
      eid: 'P001',
      pname: 'project1',
      numOfEmp: 3,
      sdate: '21/01/2023',
      edate: '21/01/2023',
    },
    {
      eid: 'P002',
      pname: 'project2',
      numOfEmp: 5,
      sdate: '21/01/2023',
      edate: '21/01/2023',
    },
    {
      eid: 'P003',
      pname: 'project3',
      numOfEmp: 1,
      sdate: '21/01/2023',
      edate: '21/01/2023',
    },
    {
      eid: 'P004',
      pname: 'project4',
      numOfEmp: 3,
      sdate: '21/01/2023',
      edate: '21/01/2023',
    },
  ];
  p: any;
}
