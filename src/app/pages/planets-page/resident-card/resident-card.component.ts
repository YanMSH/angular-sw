import {Component, Input} from '@angular/core';
import {People} from "../../../models/People";

@Component({
  selector: 'app-resident-card',
  templateUrl: './resident-card.component.html',
  styleUrls: ['./resident-card.component.scss']
})
export class ResidentCardComponent {
  @Input() resident: People;


  get name() {
    return this.resident.name;
  }

  get height() {
    return this.resident.height;
  }

  get mass() {
    return this.resident.mass;
  }

  get skinColor() {
    return this.resident.skin_color;
  }

  get eyesColor() {
    return this.resident.eye_color;
  }

  get birthYear() {
    return this.resident.birth_year;
  }

  get gender() {
    return this.resident.gender;
  }

}
