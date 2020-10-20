import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng7BootstrapBreadcrumbModule} from "ng7-bootstrap-breadcrumb";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './overview/score/score.component';
import { BaseChartDirective, ChartsModule, ThemeService } from 'ng2-charts';
import { ParticipationComponent } from './overview/participation/participation.component';
import { CommunicationsComponent } from './overview/communications/communications.component';
import { DriversComponent } from './overview/drivers/drivers.component';
// import { CarouselModule } from 'angular-owl-carousel2';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OverviewComponent,
    HomeComponent,
    ScoreComponent,
    ParticipationComponent,
    CommunicationsComponent,
    DriversComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7BootstrapBreadcrumbModule,
    ChartsModule ,
    CarouselModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
