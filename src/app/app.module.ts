import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { NavigationLinkComponent } from './shared/components/navigation/navigation-link/navigation-link.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlanetsPageComponent } from './pages/planets-page/planets-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { PlanetCardComponent } from './pages/planets-page/planet-card/planet-card.component';
import { PlanetSheetComponent } from './pages/planets-page/planet-sheet/planet-sheet.component';
import { ResidentCardComponent } from './pages/planets-page/resident-card/resident-card.component';
import { CardComponent } from './shared/components/card/card.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { CharacterSheetComponent } from './pages/characters-page/character-sheet/character-sheet.component';
import { LoadingMessageComponent } from './shared/components/loading-message/loading-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationLinkComponent,
    MainPageComponent,
    PlanetsPageComponent,
    CharactersPageComponent,
    PlanetCardComponent,
    PlanetSheetComponent,
    ResidentCardComponent,
    CardComponent,
    CharacterSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingMessageComponent
  ],
  providers: [{provide:LocationStrategy, useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
