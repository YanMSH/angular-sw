import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {PlanetsPageComponent} from "./pages/planets-page/planets-page.component";
import {CharactersPageComponent} from "./pages/characters-page/characters-page.component";
import {PlanetSheetComponent} from "./pages/planets-page/planet-sheet/planet-sheet.component";
import {CharacterSheetComponent} from "./pages/characters-page/character-sheet/character-sheet.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'planets', component: PlanetsPageComponent},
  {path: 'planets/:planetName', component: PlanetSheetComponent},
  {path: 'characters', component: CharactersPageComponent},
  {path: 'characters/:characterName', component: CharacterSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
