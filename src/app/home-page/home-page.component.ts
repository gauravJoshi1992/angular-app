import { Component, OnInit } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    showLeftPane = true;
    isArrowDown = true;
    arrowIconClass = 'down';

    constructor (private loginService: LoginService) { }

    leftPaneData = [
        {
            display: 'Filters',
            options: [
                {
                    display: 'Brand',
                }, {
                    display: 'Type',
                }, {
                    display: 'Price',
                }
            ],
        }
    ]

    ngOnInit () {
        setTimeout(()=>{
            this.loginService.userAuthChanged(true);
        });
    }

    public hamburgerClick = function (argument) {
        this.showLeftPane = ! this.showLeftPane;
    }

    public arrowClick = function () {
        console.log('hiiiiiiii')
        if (this.arrowIconClass === 'down') {
            this.arrowIconClass = 'right';
            this.isArrowDown = false;
        } else {
            this.arrowIconClass = 'down';
            this.isArrowDown = true;
        }
    }
}
