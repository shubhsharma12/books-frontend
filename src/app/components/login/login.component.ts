import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    this.userService.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.jwt != null) {
        alert('Hello, Your token is ' + response.jwt);
        const jwtToken = response.jwt;
        localStorage.setItem('jwt', jwtToken);
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
}
