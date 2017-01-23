import { Injectable } from '@angular/core';
import {Subpurpllit} from './subpurpllit.model';
import {SUBPURPLLITS} from './subpurpllits';

@Injectable()
export class SubpurpllitService {

  constructor() { }

  getSubpurpllits() {
    return SUBPURPLLITS;
  }

}
