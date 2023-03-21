import { Component } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  noe: number = 1;
  template = {
    grade: '',
    skill: '',
    eid: '',
    s_date: '',
    e_date: '',
    approved: false,
  };

  finalDetails: any = [];
  updateEmpDetails() {
    this.finalDetails.length = 0;
    for (let i = 0; i < this.noe; i++) {
      this.finalDetails.push(this.template);
    }
  }
  ngOnInit() {
    this.updateEmpDetails();
  }
}
