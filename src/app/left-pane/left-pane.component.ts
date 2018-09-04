import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
    selector: 'app-left-pane',
    templateUrl: './left-pane.component.html',
    styleUrls: ['./left-pane.component.scss'],
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
                    showTooltip: false,
                }, {
                    display: 'Type',
                    showTooltip: false,
                }, {
                    display: 'Price',
                    showTooltip: false,
                }
            ],
            showOptions: true,
        }, {
            arrowIconClass: 'down',
            display: 'Customer Ratings',
            options: [
                {
                    display: '5 * & above',
                    showTooltip: false,
                }, {
                    display: '4 * & above',
                    showTooltip: false,
                }, {
                    display: '3 * & above',
                    showTooltip: false,
                }, {
                    display: '2 * & above',
                    showTooltip: false,
                }, {
                    display: '1 * & above',
                    showTooltip: false,
                }
            ],
            showOptions: true,
        }, {
            arrowIconClass: 'down',
            display: 'Category',
            options: [
                {
                    display: 'Mobiles',
                    showTooltip: false,
                }, {
                    display: 'Electronics',
                    showTooltip: false,
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

    public showFilterTooltip = function (obj) {
        var openedTooltipObj = _.filter(this.leftPaneData, function (paneData) {
            var filteredObj = _.filter(paneData.options, function (argument) {
                return argument.showTooltip;
            })

                console.log('hiiiiiii',_.isEmpty(filteredObj), filteredObj)
            if (! _.isEmpty(filteredObj) && filteredObj.showTooltip) {
                return filteredObj;
            }
        });
        console.log(openedTooltipObj)
        obj.showTooltip = ! obj.showTooltip;
    }
}
