import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'countries', component: CountriesComponent},
  {path: 'country/:country/:id', component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
