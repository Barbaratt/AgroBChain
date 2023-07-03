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
import { AlertComponent } from 'src/components/alert/alert.component';
import { ModalAddCultivationTypeComponent } from 'src/components/farmer/modal-add-cultivation-type/modal-add-cultivation-type/modal-add-cultivation-type.component';

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
} from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

//Libs
import { NgChartsModule } from 'ng2-charts';

// Guards
import { AuthGuard } from './authentification/helpers/auth.guard';
import { FarmerGuard } from './authentification/helpers/farmer.guard';

// Services
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ModalAddCultivationMethodComponent } from 'src/components/farmer/modal-add-cultivation-method/modal-add-cultivation-method/modal-add-cultivation-method.component';
import { ModalAddEquipamentMachineryComponent } from 'src/components/farmer/modal-add-equipament-machinery/modal-add-equipament-machinery/modal-add-equipament-machinery.component';
import { ModalAddNourishmentComponent } from 'src/components/farmer/modal-add-nourishment/modal-add-nourishment/modal-add-nourishment.component';

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
    AlertComponent,
    ModalAddCultivationTypeComponent,
    ModalAddCultivationMethodComponent,
    ModalAddEquipamentMachineryComponent,
    ModalAddNourishmentComponent,
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
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  providers: [
    HttpClient,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    // provideNgxMask(),
    AuthService,
    AuthGuard,
    FarmerGuard,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
