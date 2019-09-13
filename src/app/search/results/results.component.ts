import { FactService } from '../../core/services/fact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  hasResults: boolean;
  facts: any[];

  factForm = new FormGroup({
    term: new FormControl('', [Validators.required])
  });

  constructor(private factService: FactService) { }

  ngOnInit() {

    this.factService.getFacts().subscribe((data) => {
      this.facts = data;
      console.log(data);
      this.hasResults = true;
      this.factForm.get('term').setValue('maior empresa');
    });

  }

  clearSearch() {
    this.factForm.reset();
    this.hasResults = false;
  }

}
