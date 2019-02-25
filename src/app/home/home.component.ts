import {Component, OnChanges, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges {
  path = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  isCollapsed = false;
  ngOnInit() {
  }
  ngOnChanges(){
  }

}
