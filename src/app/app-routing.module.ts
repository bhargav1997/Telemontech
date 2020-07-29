import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'
import { ServicesComponent } from './Pages/services/services.component'
import { PortfolioComponent } from './Pages/portfolio/portfolio.component'
import { ContactComponent } from './Pages/contact/contact.component'
import { AboutComponent } from './Pages/about/about.component'
import { BlogComponent } from './Pages/blog/blog.component'
import { BlogSingleComponent } from './Pages/blog-single/blog-single.component'
import { ErrorComponent } from './Pages/error/error.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-single', component: BlogSingleComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
