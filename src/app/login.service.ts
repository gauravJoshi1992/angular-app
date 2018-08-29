import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    userName: '';
    currentNameSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    public userAuthChanged (status: boolean) {
        this.authChanged.emit(status);
    }

    public getUserName (obj) {
        this.userName = obj.value;
    }
}
