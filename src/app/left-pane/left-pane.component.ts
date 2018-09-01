import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-left-pane',
    templateUrl: './left-pane.component.html',
    styleUrls: ['./left-pane.component.scss']
})
export class LeftpaneComponent implements OnInit {
    isArrowDown = true;
    arrowIconClass = 'down';

    constructor() { }

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
        }, {
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
        }, {
            display: 'Category',
            options: [
                {
                    display: 'Mobiles',
                }, {
                    display: 'Electronics',
                }
            ],
        }
    ]

    ngOnInit() {
    }

    public arrowClick = function () {
        if (this.arrowIconClass === 'down') {
            this.arrowIconClass = 'right';
            this.isArrowDown = false;
        } else {
            this.arrowIconClass = 'down';
            this.isArrowDown = true;
        }
    }
}
