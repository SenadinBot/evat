import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html'
})
export class CountryComponent implements OnInit {

  rightIcon = faCaretRight;

  constructor() { }

  ngOnInit(): void {
  }

}
