import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginService } from './login.service';

import * as _ from 'lodash';
import { DropDownComponent } from './drop-down/drop-down.component';
import { UserComponent } from './user/user.component';
import { UserSettingComponent } from './user-setting/user-setting.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'setting', component: UserSettingComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomePageComponent,
        DropDownComponent,
        UserComponent,
        UserSettingComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule { }
