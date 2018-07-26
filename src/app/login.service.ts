import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    currentNameSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // isUserIconAvailable = false;
    constructor() { }
    // console.log(currentNameSubject.getValue());
    showUserIcon (iconValue) {
    	console.log('first::::::::::',this.currentNameSubject.getValue());
    	this.currentNameSubject.next(iconValue);
    	console.log('second::::::::::',this.currentNameSubject.getValue());
        // this.isUserIconAvailable =  iconValue;
    }
}
