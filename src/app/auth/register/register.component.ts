import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {NotificationService} from "../../service/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerGorm: FormGroup;
  constructor(private authService: AuthService,
              private notification: NotificationService,
              private router: Router,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerGorm = this.createRegisterForm();
  }

  createRegisterForm(): FormGroup{
   return this.formBuilder.group({
      email: ['',Validators.compose([Validators.required])],
      name: ['',Validators.compose([Validators.required])],
      username: ['',Validators.compose([Validators.required])],
     password: ['',Validators.compose([Validators.required])],
     conformPassword: ['',Validators.compose([Validators.required])]
    });
  }

  submit(): void {
    console.log(this.registerGorm.value);
    this.authService.registry({
      email: this.registerGorm.value.email,
      name: this.registerGorm.value.name,
      username: this.registerGorm.value.username,
      password: this.registerGorm.value.password,
      conformPassword: this.registerGorm.value.conformPassword
    }).subscribe(data => {
      console.log(data)
      this.notification.showSnackBar("Successfully Registered")
    },error => {
      console.log(error)
      this.notification.showSnackBar("Something went wrong during registration")
    })
  }


}
