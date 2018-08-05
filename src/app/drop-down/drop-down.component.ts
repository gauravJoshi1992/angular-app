import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  	@Input() userDropdownItems: any;
  	constructor(private router: Router) { }

  	ngOnInit() {
  		this.userDropdownItems = this.userDropdownItems;
  	}

  	public doOnClick (item) {
  		this.router.navigate([item.navigateTo]);
  	}
}
