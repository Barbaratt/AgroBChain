import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './../components/login/login.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { TableComponent } from 'src/components/table/table.component';
import { GraficsComponent } from 'src/components/grafics/grafics.component';
import { NewFarmerComponent } from 'src/components/farmer/new-farmer/new-farmer.component';
import { ModalComponent } from 'src/components/modal/modal.component';
import { ModalAddProductsComponent } from 'src/components/modal-add-products/modal-add-products.component';
import { ModalDeleteComponent } from 'src/components/modal-delete/modal-delete.component';
import { EditProductsFarmerComponent } from 'src/components/farmer/edit-products-farmer/edit-products-farmer.component';
import { SidebarProfileComponent } from 'src/components/sidebar-profile/sidebar-profile.component';

// Modules from Angular
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Modules from Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

//Libs
import { NgChartsModule } from 'ng2-charts';

// import { NgxMaskDirective } from 'ngx-mask';
// import { NgxMaskPipe } from 'ngx-mask/lib/ngx-mask.pipe';
// import { provideNgxMask } from 'ngx-mask/lib/ngx-mask.providers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewFarmerComponent,
    TableComponent,
    GraficsComponent,
    ModalComponent,
    ModalAddProductsComponent,
    ModalDeleteComponent,
    EditProductsFarmerComponent,
    SidebarProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatStepperModule,
    NgChartsModule,
    MatPaginatorModule,
  ],
  providers: [
    HttpClient,
    // MatDialogRef,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    // provideNgxMask(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
