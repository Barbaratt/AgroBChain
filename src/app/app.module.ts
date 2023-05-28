import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './../components/login/login.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
// import { LoginComponent } from '../components/login/login.component';
// import { DashboardComponent } from '../components/dashboard/dashboard.component';
// import { TableComponent } from 'src/components/table/table.component';

// Modules from Angular
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Modules from Angular Material

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewUserComponent } from 'src/components/new-user/new-user.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, NewUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
