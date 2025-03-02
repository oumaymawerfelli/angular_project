import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddResidenceComponent } from './residences/add-residence/add-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsComponent } from './apartments/apartments/apartments.component';
import { ApartmentsByResidenceComponent } from './apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';

// Define routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/:id', component: ResidenceDetailsComponent },
  { path: 'add-residence/:id', component: AddResidenceComponent },
  { path: 'add-residence', component: AddResidenceComponent },

  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartments-by-residence/:id', component: ApartmentsByResidenceComponent },  // FIXED
  { path: 'add-apartment', component: AddApartmentComponent },  // Moved UP

  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }, // Keep this LAST
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
