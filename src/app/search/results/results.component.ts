import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  isResults: boolean;

  factForm = new FormGroup({
    term: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
    this.isResults = true;
    this.factForm.get('term').setValue('Bolsonaro');
  }

  clearSearch() {
    this.factForm.reset();
    this.isResults = false;
  }

}
