import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Loginform: FormGroup

  constructor(
    private authService: AuthService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  log() {
    if (this.Loginform.valid) {
      this.authService.login(this.Loginform.value)
        .subscribe((res: any) => {
          if (res.token) {
            localStorage.setItem('token', res.token)
            this.router.navigate(['/'])
          } else {
            alert('invalid user')
          }
        })
    }
  }

}
