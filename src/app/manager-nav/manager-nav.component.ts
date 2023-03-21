import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-nav',
  templateUrl: './manager-nav.component.html',
  styleUrls: ['./manager-nav.component.scss'],
})
export class ManagerNavComponent {
  constructor(private router: Router) {}
  count = '1';
  change(val: any) {
    this.count = val;
  }
  createProject() {
    this.router.navigate(['/manager/create-project']);
  }
}
