import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  Title = 'Welcome to HiepDV5';

  inputdata = '';

  inputobject = { name: 'Sam', country: 'india' };

  ngOnInit(): void {}
}
