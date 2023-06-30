import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonebookRoutingModule } from './phonebook-routing.module';
import { PhonebookComponent } from './phonebook.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PhonebookComponent
  ],
  imports: [
    CommonModule,
    PhonebookRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class PhonebookModule { }
