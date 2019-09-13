import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from './services/api.service';
import { FactService } from './services/fact.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ApiService,
        FactService
    ],
    declarations: []
})
export class CoreModule { }
