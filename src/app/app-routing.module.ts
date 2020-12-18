import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireInscriptionComponent } from './formulaire-inscription/formulaire-inscription.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'inscription', component: FormulaireInscriptionComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
