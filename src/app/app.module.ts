import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MusicListComponent } from './music-list/music-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AppConfigModule } from './app-config/app-config.module';
import { HttpClientModule } from '@angular/common/http'
import { ItuneService } from './shared/itune-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
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
