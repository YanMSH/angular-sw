import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";
import {People} from "../../models/People";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {
  loading: boolean;
  people: People[];
  destroy$ = new Subject<boolean>();
  constructor(
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.peopleService.page$.subscribe(
      (currentPage)=>{
        this.peopleService.getPeople(currentPage)
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(
          (v) => {
            this.loading = false;
            this.people = v.results;
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
    return this.peopleService.page$.value;
  }

  changePage(amount: number) {
    this.peopleService.page$.next(this.peopleService.page$.value + amount);
    this.loading = true;
  }

  peopleTrackBy(index: number, people: People) {
    return people.name;
  }

}
