import { Component, OnInit } from '@angular/core';
import { Subpurpllit } from '../subpurpllit.model';

@Component({
  selector: 'app-list-subpurpllits',
  templateUrl: './list-subpurpllits.component.html',
  styleUrls: ['./list-subpurpllits.component.css']
})
export class ListSubpurpllitsComponent {
  subpurpllits: Subpurpllit[] = [
    new Subpurpllit("Care Bears", "Everything Care Bear Stare", 1),
    new Subpurpllit("Grizzly Bears", "The new era of bullying?", 2),
    new Subpurpllit("Rocks", "Is your president smarter than a...", 3),
    new Subpurpllit("Sandwiches", "Not just for breakfast anymore. Sandwiches.", 4)
  ];
}
