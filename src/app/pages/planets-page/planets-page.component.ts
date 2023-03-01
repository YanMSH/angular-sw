import {Component, OnDestroy, OnInit} from '@angular/core';
import {Planet} from "../../models/Planet";
import {PlanetService} from "../../shared/services/planet.service";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-planets-page',
  templateUrl: './planets-page.component.html',
  styleUrls: ['./planets-page.component.scss']
})
export class PlanetsPageComponent implements OnInit, OnDestroy {
  loading = false;
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage$ = new BehaviorSubject(1);
  destroy$ = new Subject<boolean>()
  planets: Planet[];

  constructor(
    private planetService: PlanetService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.currentPage$.subscribe(
      (currentPage) => {
        this.planetService.getPlanets(currentPage)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (v) => {
              this.isFirstPage = v.previous === null;
              this.isLastPage = v.next === null;
              this.loading = false;
              this.planets = v.results;
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
    return this.currentPage$.value;
  }

  changePage(amount: number) {
    this.currentPage$.next(this.currentPage$.value + amount);
    this.loading = true;
  }

  nextPage = () => this.changePage(1);
  prevPage = () => this.changePage(-1);

  planetsTrackBy(index: number, planet: Planet) {
    return planet.name;
  }
}
