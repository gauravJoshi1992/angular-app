import { Component, OnInit } from '@angular/core';

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
}
