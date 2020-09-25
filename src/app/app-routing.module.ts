import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowdataComponent } from './showdata/showdata.component'; 


const routes: Routes = [ {path:'', component:ShowdataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
