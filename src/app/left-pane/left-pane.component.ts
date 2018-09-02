import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-pane',
    templateUrl: './left-pane.component.html',
    styleUrls: ['./left-pane.component.scss']
})
export class LeftpaneComponent implements OnInit {

    constructor() { }

    leftPaneData = [
        {
            arrowIconClass: 'down',
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
            showOptions: true,
        }, {
            arrowIconClass: 'down',
            display: 'Customer Ratings',
            options: [
                {
                    display: '5 * & above',
                }, {
                    display: '4 * & above',
                }, {
                    display: '3 * & above',
                }, {
                    display: '2 * & above',
                }, {
                    display: '1 * & above',
                }
            ],
            showOptions: true,
        }, {
            arrowIconClass: 'down',
            display: 'Category',
            options: [
                {
                    display: 'Mobiles',
                }, {
                    display: 'Electronics',
                }
            ],
            showOptions: true,
        }
    ]

    ngOnInit() {
    }

    public arrowClick = function (option) {
        if (option.arrowIconClass === 'down') {
            option.arrowIconClass = 'right';
            option.showOptions = false;
        } else {
            option.arrowIconClass = 'down';
            option.showOptions = true;
        }
    }
}
