import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    isUserIconClicked = false;
    userDropdownItems = [
        {
            display: 'Setting',
            navigateTo: 'setting', 
        }, {
            display: 'Log Out',
            navigateTo: '', 
        }
    ];

    constructor() { }

    ngOnInit() {
    }

    public userIconClick () {
        this.isUserIconClicked = ! this.isUserIconClicked;
    }

    public close () {
        console.log('hiiiiiii')
        this.isUserIconClicked = false;
    }

    // @HostListener('document:click')
    // clickout(event) {
    //     console.log('some thing key upped', this.isUserIconClicked);
    //     if (this.isUserIconClicked) {
    //         // this.isUserIconClicked = false;
    //     }
    // }
}
