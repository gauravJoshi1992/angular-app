import { Component, HostListener } from '@angular/core';

import { DropDownComponent } from './drop-down/drop-down.component';

import { LoginService } from './login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LoginService],
})
export class AppComponent {
    title = 'Electronic Online Shop';
    isUserIconAvailable = false;
    isUserIconClicked = false;

    // @ViewChild('userIcon') myInput;

    constructor (private loginService: LoginService) {}

    ngOnInit () {
        this.loginService.authChanged.subscribe((val) => {
            this.isUserIconAvailable = val;
        })
    }

    // public userIconClick () {
    //     this.isUserIconClicked = ! this.isUserIconClicked;
    // }

    // @HostListener('click') onClick(event) {
    //     console.log('some thing key upped', event);
    //     if (this.isUserIconClicked) {
    //         this.isUserIconClicked = false;
    //     }
    // }
}
