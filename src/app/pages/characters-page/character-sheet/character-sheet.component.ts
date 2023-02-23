import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {People} from "../../../models/People";
import {PeopleService} from "../../../shared/services/people.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit, OnDestroy {
  characterInfo: People;
  loading: boolean;
  destroy$ = new Subject<boolean>;
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => {
      const characterName = v.get('characterName');
      if (characterName) {
        this.peopleService.getPeopleInfo(characterName)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
          () => {
            this.characterInfo = this.peopleService.peopleInfo;
            this.loading = false;
          }
        );
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
