import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

import * as _ from 'lodash';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    constructor(private router: Router, private loginService: LoginService) { }
    isNewUser = false;
    isSubmitBtnEnable = false;
    isBtnEnable = 'disabled';

    labels = {
        loginHeading: 'Enter UserName and Password to login.',
        createUserHeading: 'Enter UserName and Password to register.',
        newUser: 'New User',
        goToLogin: 'Go to Login page',
        submit: 'Submit',
    };

    loginInputData = [
        {
            display: 'UserName',
            errorMsg: 'UserName is required',
            showErrorBox: false,
            type: 'normal',
            validationFun: this.userNameValidation,
        }, {
            display: 'Password',
            errorMsg: 'Password is required and at-least of 8 char',
            showErrorBox: false,
            type: 'password',
            validationFun: this.passwordValidation,
        },
    ];

    createUserInputData = [
        {
            display: 'UserName',
            errorMsg: 'UserName is required',
            showErrorBox: false,
            type: 'normal',
            validationFun: this.userNameValidation,
        }, {
            display: 'Email',
            errorMsg: 'Email is required and end with .com',
            showErrorBox: false,
            type: 'email',
            validationFun: this.emailValidation,
        }, {
            display: 'Password',
            errorMsg: 'Password is required and at-least of 8 char',
            showErrorBox: false,
            type: 'password',
            validationFun: this.passwordValidation,
        }, {
            display: 'Re-enter Password',
            errorMsg: 'Password is required and at-least of 8 char',
            showErrorBox: false,
            type: 'password',
            validationFun: this.passwordValidation,
        },
    ];

    ngOnInit() {
        this.submitBtnClass();
    }

    public createNewUser () {
        this.isNewUser = true;
    }

    public goToLogin () {
        this.isNewUser = false;
    }

    public submitBtnClass () {
        this.isBtnEnable = this.isSubmitBtnEnable ? '' : 'disabled';
    }

    public setvalidation () {
        var fieldConfig = this.isNewUser ? this.createUserInputData : this.loginInputData;

        _.each(fieldConfig, function (obj) {
            obj.showErrorBox = obj.validationFun(obj);
        });

        var filedWithErrorMsg = _.filter(fieldConfig, function (object) {
            return !object.showErrorBox;
        })

        if (filedWithErrorMsg.length === fieldConfig.length) {
            setTimeout(()=>{
                this.loginService.getUserName(fieldConfig);
            })

            this.loginSuccess();
        } else {
            this.loginError();
        }
    }

    public loginSuccess () {
        this.router.navigate(['home']);
    }

    public loginError () {
        return;
    }

    public userNameValidation (obj) {
        if (_.isEmpty(obj.value)) {
            return true;
        }

        return false;
    }

    public passwordValidation (obj) {
        if (_.isEmpty(obj.value) || obj.value.length < 8) {
            return true;
        }

        return false;
    }

    public emailValidation (obj) {
        if (_.isEmpty(obj.value) || !_.endsWith(obj.value, '.com')) {
            return true;
        }

        return false;
    }

    public doOnChange (target, data) {
        data.value = target.value;

        var isAllLoginField = this.isEveryValueTrue(this.loginInputData);
        var isAllCreateUserField = this.isEveryValueTrue(this.createUserInputData);

        var isTrueValue = this.isNewUser ? isAllCreateUserField : isAllLoginField;

        this.isSubmitBtnEnable = !_.isEmpty(isTrueValue);
        this.submitBtnClass();
    }

    public submitData () {
        this.setvalidation();
    }

    public isEveryValueTrue (obj) {
        return _.filter(obj, function (objValue) {
            return !_.isEmpty(objValue.value);
        });
    }
}
