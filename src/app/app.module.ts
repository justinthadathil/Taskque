import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppListingComponent } from './components/app-listing/app-listing.component';
import { AppCreateTaskComponent } from './components/app-create-task/app-create-task.component';
import { AppFilterComponent } from './components/app-filter/app-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppListingComponent,
    AppCreateTaskComponent,
    AppFilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
