import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { searchRoutes } from './search.routing';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [ HomeComponent, ResultsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(searchRoutes)
  ]
})
export class SearchModule { }
