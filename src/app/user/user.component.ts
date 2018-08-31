import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    host: {
      '(document:click)': 'handleClick($event)',
    },
})
export class UserComponent implements OnInit {
    isUserIconClicked = false;
    public elementRef;
    userDropdownItems = [
        {
            display: 'Setting',
            navigateTo: 'setting', 
        }, {
            display: 'Log Out',
            navigateTo: '', 
        }
    ];

    constructor(private myElement: ElementRef) {
        this.elementRef = myElement;
    }

    ngOnInit() {
    }

    public handleClick(event){
        var clickedComponent = event.target;
        var inside = false;

        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);

        if(inside){
            this.isUserIconClicked = ! this.isUserIconClicked;
        }else{
            this.isUserIconClicked = false;
        }
    }
}
