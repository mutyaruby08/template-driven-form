import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-driven-form';
  @ViewChild('myForm') signUpForm!: NgForm;
  genders = ["Male", "Female", "LGBTQ+", "Prefer not to say"]
  submitted = false;
  default = 'pet';
  user = {
    username: '', password: '', email: '', phone: '', secret: '', ans: '',
    gender: '', job: '', jobDes: '', salary: ''
  }



  onSubmit(){
    this.submitted  = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.password = this.signUpForm.value.userData.password;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.phone = this.signUpForm.value.userData.phone;
    this.user.secret = this.signUpForm.value.otherInfo.secret;
    this.user.ans = this.signUpForm.value.otherInfo.ans;
    this.user.gender = this.signUpForm.value.otherInfo.gender;
    this.user.job = this.signUpForm.value.otherInfo.job;
    this.user.jobDes = this.signUpForm.value.otherInfo.jobDes;
    this.user.salary = this.signUpForm.value.otherInfo.salary;

    this.signUpForm.reset();


  }
}
