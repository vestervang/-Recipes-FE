import { Routes } from '@angular/router';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundComponent },
];
