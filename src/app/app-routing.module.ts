import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './my-componet/about/about.component';
import { ContactComponent } from './my-componet/contact/contact.component';
import { HomeComponent } from './my-componet/home/home.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"about" , component:AboutComponent},
  {path:'contact' , component:ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
