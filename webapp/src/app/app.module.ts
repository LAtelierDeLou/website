import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { CreationsComponent } from './creations/creations.component';

const routes: Routes = [
    // Home
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'creations',
        component: CreationsComponent
    },
    {
        path: 'about',
        component: ContactComponent
    },
    // // Not Found
    // {
    //     path: '**',
    //     component: PageNotFoundComponent
    // }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        HeaderComponent,
        SliderComponent,
        CreationsComponent
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
