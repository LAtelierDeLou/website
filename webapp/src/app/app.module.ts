import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
    // // Home
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    // {
    //     path: 'home',
    //     component: HomeComponent
    // },
    // // Not Found
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        // Material Angular
        BrowserModule,
        BrowserAnimationsModule,
        // // AngularFire
        // AngularFireModule.initializeApp(environment.firebase),
        // AngularFireAuthModule,
        // Routes
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
