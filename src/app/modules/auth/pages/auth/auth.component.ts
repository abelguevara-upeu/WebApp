import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  
  formLogin: FormGroup = new FormGroup({});

  constructor(private router:Router){}

  ngOnInit(): void {
    this.initFormGroup();
  }

  public initFormGroup(){
    this.formLogin = new FormGroup({
      user: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })
  }

  public sendUser(){
    const {value} = this.formLogin
    console.log(value)
     if (value.user==='admin' && value.password === '123' ) {
      this.router.navigate(['/home/welcome']);
     }

  }
}
