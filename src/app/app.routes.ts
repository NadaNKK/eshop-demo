import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StoresComponent } from './pages/stores/stores.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
    {
        path: 'ecommerce',
        component: HomeComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'stores',
        component: StoresComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
