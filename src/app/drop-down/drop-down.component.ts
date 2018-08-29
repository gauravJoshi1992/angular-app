import { Component, OnInit, Input } from '@angular/core';

import { LoginService } from '../login.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-drop-down',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  	@Input() userDropdownItems: any;
  	constructor(private loginService: LoginService) { }

  	ngOnInit() {
  		this.userDropdownItems = this.userDropdownItems;
  	}

  	public doOnClick (item) {
  		this.router.navigate([item.navigateTo]);

        if (_.isEmpty(item.navigateTo)) {
            this.loginService.userAuthChanged(false);
        }  
  	}
}
