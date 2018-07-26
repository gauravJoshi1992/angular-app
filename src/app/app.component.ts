import { Component } from '@angular/core';

import { LoginService } from './login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LoginService]
})
export class AppComponent {
    title = 'Electronic Online Shop';
    isUserIconAvailable = false;

    constructor (private loginService: LoginService) {
        this.loginService.currentNameSubject.subscribe((val) => {
            console.log(val);
            this.isUserIconAvailable = val;
        })
    }

    ngOnInit () {}
}
