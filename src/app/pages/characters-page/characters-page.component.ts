import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeopleService} from "../../shared/services/people.service";
import {People} from "../../models/People";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {
  loading: boolean;
  people: People[];
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage$ = new BehaviorSubject(1);
  destroy$ = new Subject<boolean>();

  constructor(
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.currentPage$.subscribe(
      (currentPage) => {
        this.peopleService.getPeople(currentPage)
          .pipe(
            takeUntil(this.destroy$)
          )
          .subscribe(
            (v) => {
              this.isFirstPage = v.previous === null;
              this.isLastPage = v.next === null;
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
    return this.currentPage$.value;
  }

  changePage(amount: number) {
    this.currentPage$.next(this.currentPage$.value + amount);
    this.loading = true;
  }

  nextPage = () => this.changePage(1);
  prevPage = () => this.changePage(-1);

  peopleTrackBy(index: number, people: People) {
    return people.name;
  }

}
