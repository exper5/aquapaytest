import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService, AlertService, UserService } from '../_services';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  // pass: any;
  
  constructor(
    private formBuilder: FormBuilder,
    //private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
    

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }
   get f() { return this.loginForm.controls; }


  onSubmit() {
    // let pass=this.f.password;
    // window.btoa('admin');
    this.submitted = true;
    // console.log(pass);
    console.log(this.loginForm);
  

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      
        return;
    }

    this.loading = true;
   
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              console.log(this.returnUrl);
                this.router.navigate(['/' ,'master']);
                // $('#myModal').modal('hide');
            },
            error => {
              console.log(error);
                // this.alertService.error(error);
                this.loading = false;
            });
}
}
