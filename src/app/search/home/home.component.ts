import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  factForm = new FormGroup({
    term: new FormControl('', [Validators.required])
  });

  constructor() {}

  ngOnInit() { }

  executeSearch() {
    const term = this.factForm.get('term').value;
    this.factForm.reset();
    console.log('Fato:', term);
  }

}
