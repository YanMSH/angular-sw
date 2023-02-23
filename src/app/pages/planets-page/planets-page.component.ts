import {Component, OnDestroy, OnInit} from '@angular/core';
import {Planet} from "../../models/Planet";
import {PlanetService} from "../../shared/services/planet.service";
import {People} from "../../models/People";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent implements OnInit, OnDestroy {
  loading = false;
  chosenPlanet: Planet;
  people: People[] = [];
  planets: Planet[];
  destroy$ = new Subject<boolean>()

  constructor(
    private planetService: PlanetService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.planetService.page$.subscribe(
      (currentPage) => {
        this.planetService.getPlanets(currentPage)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            () => {
              this.loading = false;
              this.planets = this.planetService.planets
            }
          )
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get currentPage() {
    return this.planetService.page$.value;
  }

  changePage(amount: number) {
    this.planetService.page$.next(this.planetService.page$.value + amount);
    this.loading = true;
  }

  planetsTrackBy(index: number, planet: Planet) {
    return planet.name;
  }


}
