import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent,'title':'home'},
    {'path':'about',component:AboutComponent,'title':'about'},
    {'path':'contact',component:ContactComponent,'title':'contact'},
    {'path':'service',component:ServiceComponent,'title':'service'}
];
