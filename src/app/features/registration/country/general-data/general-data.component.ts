import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html'
})
export class GeneralDataComponent implements OnInit {

  editIcon = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

}
