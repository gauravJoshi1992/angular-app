import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    showLeftPane = true;

    constructor (private loginService: LoginService) { }

    ngOnInit () {
        setTimeout(()=>{
            this.loginService.userAuthChanged(true);
        });
    }

    public hamburgerClick = function (argument) {
        this.showLeftPane = ! this.showLeftPane;
    }
}
