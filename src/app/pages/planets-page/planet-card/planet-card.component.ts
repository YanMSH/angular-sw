import {Component, Input} from '@angular/core';
import {Planet} from "../../../models/Planet";

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent {
  @Input() planet: Planet;
}
