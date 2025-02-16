import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  userName: string = '';

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.callUserService();
  }

  callUserService() {
    this.service.fetchUsername().subscribe((response) => {
      if (response.name) {
        this.userName = response.name;
      }
    });
  }
}
