import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subpurpllit } from '../subpurpllit.model';
import {SubpurpllitService} from '../subpurpllit.service';

@Component({
  selector: 'app-subpurpllit',
  templateUrl: './subpurpllit.component.html',
  styleUrls: ['./subpurpllit.component.css'],
  providers: [SubpurpllitService]
})
export class SubpurpllitComponent implements OnInit {
  subpurpllitID: number;
  subpurpllitToDisplay: Subpurpllit;

  constructor(private route: ActivatedRoute, private location: Location, private subpurpllitService: SubpurpllitService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.subpurpllitID = parseInt(urlParametersArray['id']);
    });
    this.subpurpllitToDisplay = this.subpurpllitService.getSubById(this.subpurpllitID);
  }

}
