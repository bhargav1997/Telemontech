import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { ServicesComponent } from './Pages/services/services.component';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { DashboardBlogComponent } from './dashboard/Pages/blog/blog.component'
import { BlogSingleComponent } from './Pages/blog-single/blog-single.component';
import { ErrorComponent } from './Pages/error/error.component';
import { PortfolioSliderComponent } from './Components/portfolio-slider/portfolio-slider.component';
import { PortfolioItemComponent } from './Components/portfolio-slider/portfolio-item/portfolio-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './Components/dashboard-sidebar/dashboard-sidebar.component'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardHeaderComponent } from './Components/dashboard-header/dashboard-header.component';
import { CreateBlogComponent } from './dashboard/Pages/blog/create-blog/create-blog.component';
import { ViewBlogComponent } from './dashboard/Pages/blog/view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    NavigationComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    BlogSingleComponent,
    ErrorComponent,
    PortfolioSliderComponent,
    PortfolioItemComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardBlogComponent,
    DashboardHeaderComponent,
    CreateBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AngularEditorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
