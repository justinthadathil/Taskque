import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';
import { AppListingComponent } from './components/app-listing/app-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWelcomeComponent,
    AppListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
