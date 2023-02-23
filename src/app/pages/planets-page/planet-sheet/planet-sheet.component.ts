import {Component, OnDestroy, OnInit} from '@angular/core';
import {Planet} from "../../../models/Planet";
import {People} from "../../../models/People";
import {ActivatedRoute} from "@angular/router";
import {PlanetService} from "../../../shared/services/planet.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-planet-sheet',
  templateUrl: './planet-sheet.component.html',
  styleUrls: ['./planet-sheet.component.scss']
})
export class PlanetSheetComponent implements OnInit, OnDestroy {
  filteredResidents: People[];
  residents: People[];
  planetInfo: Planet;
  selectValue: string;
  loading: boolean;
  loadingResidents: boolean;
  isNoResidents: boolean;
  destroy$ = new Subject<boolean>()
  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.loadingResidents = true;
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => {
      const planetName = v.get('planetName');
      if(planetName){
        this.planetService.getPlanetInfo(planetName)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
          () => {
            this.planetInfo = this.planetService.planetInfo;
            this.loading = false;
            this.planetService.currentPlanet$.next(this.planetInfo);
          }
        );
        this.planetService.currentResidents$
          .pipe(takeUntil(this.destroy$))
          .subscribe(v => {
          this.residents = v;
          this.loadingResidents = false;
          this.isNoResidents = !this.residents.length;
          this.filteredResidents = this.residents;
        })
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  applyFilter(value: string){
    this.filterResidentsByGender(value);
  }

  filterResidentsByGender(filterTerm: string){
    if(filterTerm){
      this.filteredResidents = this.residents.filter(item => item.gender === filterTerm)
    } else {
      this.filteredResidents = this.residents
    }
  }


  get name(){
    return this.planetInfo.name
  }
  get diameter(){
    return this.planetInfo.diameter
  }
  get population(){
    return this.planetInfo.population
  }
  get terrain(){
    return this.planetInfo.terrain
  }
  get water(){
    return this.planetInfo.surface_water
  }
  get orbital(){
    return this.planetInfo.orbital_period
  }
  get rotation(){
    return this.planetInfo.rotation_period
  }
}
