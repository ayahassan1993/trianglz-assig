import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: ''  , redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent , 
    children: [
      { path: ''  , redirectTo: '/Home/overview', pathMatch: 'full'},
      { path: 'overview', component: OverviewComponent ,
        data: {
          title: 'overview',
          breadcrumb: [
            {
              label: 'Home',
              url: '../'
            },
            {
              label: 'overview',
              url: './'
            }
          ]
        },  
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }