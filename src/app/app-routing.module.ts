import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'inscription', component: FormulaireInscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
