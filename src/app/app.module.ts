import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MusicListComponent } from './components/music-list/music-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { AppConfigModule } from './app-config/app-config.module';
import { HttpClientModule } from '@angular/common/http'
import { ItuneService } from './core/services/itune-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulaireInscriptionComponent } from './components/formulaire-inscription/formulaire-inscription.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormulaireConnexionComponent } from './components/formulaire-connexion/formulaire-connexion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicListComponent,
    SearchComponent,
    FormulaireInscriptionComponent,
    NotFoundComponent,
    FooterComponent,
    FormulaireConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppConfigModule,
    HttpClientModule,
  ],
  providers: [
    ItuneService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
