import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [LoginService],
})
export class AppComponent {
    title = 'Electronic Online Shop';
    isUserIconAvailable = false;
    isUserIconClicked = false;

    constructor (private loginService: LoginService) {}

    ngOnInit () {
        this.loginService.authChanged.subscribe((val) => {
            this.isUserIconAvailable = val;
        })
    }
}
