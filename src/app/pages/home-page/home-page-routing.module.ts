import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page.component";

export const homePageRoutes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  }
];
