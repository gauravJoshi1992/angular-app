import { Component, ElementRef, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
    public elementRef;
    @Input() tooltipObj: any;

    constructor(private element: ElementRef) {
        this.elementRef = element;
    }

    ngOnInit() {
    }
}
