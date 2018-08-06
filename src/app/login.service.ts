import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    currentNameSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() userName: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public userAuthChanged (status: boolean) {
        this.authChanged.emit(status);
    }

    public getUserName (obj) {
    	console.log(obj);
        this.userName.emit(obj);
    }
}
