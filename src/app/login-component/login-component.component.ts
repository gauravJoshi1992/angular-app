import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  	constructor() { }
    isNewUser = false;
    isSubmitBtnEnable = false;
    isBtnEnable = 'disabled';
    labels = {};

    public createDataObject () {
        this.labels = {
            loginHeading: 'Enter UserName and Password to login.',
            createUserHeading: 'Enter UserName and Password to register.',
            UserName: 'UserName',
            email: 'Email',
            password: 'Password',
            reEnterPassword: 'Re-enter Password',
            newUser: 'New User',
            submit: 'Submit',
        }
    }

    ngOnInit() {
        this.createDataObject();
        this.submitBtnClass();
    }

    public createNewUser () {
        this.isNewUser = true;
    }

    public submitBtnClass () {
        this.isBtnEnable = this.isSubmitBtnEnable ? '' : 'disabled';
    }

    public dnOnChange (searchValue : string) {
        this.isSubmitBtnEnable = !_.isEmpty(searchValue) ? true : false;
        this.submitBtnClass();
    }
}
