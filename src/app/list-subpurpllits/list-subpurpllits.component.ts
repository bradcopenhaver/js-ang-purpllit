import { Component, OnInit } from '@angular/core';
import { Subpurpllit } from '../subpurpllit.model';
import {SubpurpllitService} from '../subpurpllit.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-subpurpllits',
  templateUrl: './list-subpurpllits.component.html',
  styleUrls: ['./list-subpurpllits.component.css'],
  providers: [SubpurpllitService]
})
export class ListSubpurpllitsComponent implements OnInit {
  subpurpllits: Subpurpllit[];
  constructor(private router: Router, private subpurpllitService: SubpurpllitService){}

  ngOnInit(){
    this.subpurpllits = this.subpurpllitService.getSubpurpllits();
  }

  goToSubpurpllit(clickedSub: Subpurpllit) {
    this.router.navigate(['subpurpllit', clickedSub.id]);
  }
}
