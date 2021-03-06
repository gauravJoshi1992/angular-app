import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoginService } from '../login.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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

    ngOnDestroy () {
        this.loginService.userAuthChanged(false);
    }

}
