import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';
import { AppListingComponent } from './components/app-listing/app-listing.component';

const routes: Routes = [
  {
    path: 'Welcome',
    component: AppWelcomeComponent
  },
  {
    path: 'Task-Listing',
    component: AppListingComponent
  },
  {
    path: '**',
    redirectTo: 'Welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
