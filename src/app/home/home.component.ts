import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hasQuery: boolean = false;
  display: boolean = false;
  query: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
