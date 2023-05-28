import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from './../../validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide: boolean = true;
  public form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  public onSubmit(): void {
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
      //, { id: 123 }
    }
  }

  public newAccount(): void {
    console.log('Será encaminhado um link para o email `{user.email}`');
    // new user
    this.router.navigate(['/']);
  }

  public forgotPassword(): void {
    console.log('Será encaminhado um link para o email `{user.email}`');
    // new user
    this.router.navigate(['/']);
  }
}
