import { Component, OnInit } from '@angular/core';

/**
 * This is the front page component.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = "Lecture Aid";

  constructor() { }

  ngOnInit() {
  }

}
