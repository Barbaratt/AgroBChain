import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NewFarmerComponent } from 'src/components/farmer/new-farmer/new-farmer.component';
import { EditProductsFarmerComponent } from 'src/components/farmer/edit-products-farmer/edit-products-farmer.component';
import { TableComponent } from 'src/components/table/table.component';
import { AuthGuard } from './authentification/helpers/auth.guard';
import { FarmerGuard } from './authentification/helpers/farmer.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    // path: 'dashboard/:id',
    path: 'dashboard',
    component: DashboardComponent,
    // TODO: Seria bom por algum em caso de novo perfil
    // canActivate: [AuthGuard],
    // canActivateChild: [FarmerGuard],
    children: [
      { path: '', component: TableComponent },
      {
        path: 'edit-products-farmer/:id',
        component: EditProductsFarmerComponent,
      },
    ],
  },
  { path: 'new-farmer', component: NewFarmerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
