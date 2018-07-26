import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginService } from './login.service';

import * as _ from 'lodash';


const appRoutes: Routes = [
    { path: '', component: LoginComponentComponent },
    { path: 'home', component: HomePageComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponentComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
