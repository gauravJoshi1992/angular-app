import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
    userData = [
        {
            display: 'UserName',
            value: '',
        }, {
            display: 'User Type',
            value: 'Admin',
        }
    ]

    constructor(private loginService: LoginService) { }

    ngOnInit() {
        this.userData[0].value = this.loginService.userName;
    }

}
