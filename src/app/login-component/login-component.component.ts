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

    labels = {
        loginHeading: 'Enter UserName and Password to login.',
        createUserHeading: 'Enter UserName and Password to register.',
        newUser: 'New User',
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

    ngOnInit() {
        this.submitBtnClass();
    }

    public createNewUser () {
        this.isNewUser = true;
    }

    public submitBtnClass () {
        this.isBtnEnable = this.isSubmitBtnEnable ? '' : 'disabled';
    }

    public setvalidation () {
        _.each(this.loginInputData, function (obj) {
            obj.showErrorBox = obj.validationFun(obj);
        })
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

    public doOnChange (target, data) {
        data.value = target.value;

        var isTruevalue = this.isEveryValueTrue(this.loginInputData);

        this.isSubmitBtnEnable = !_.isEmpty(isTruevalue);
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
