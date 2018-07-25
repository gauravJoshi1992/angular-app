import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import * as _ from 'lodash';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomePageComponent } from './home-page/home-page.component';

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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
