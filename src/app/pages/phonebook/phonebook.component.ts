import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { IPhonebook } from './interfaces/auth.interfaces';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent {

  phonebookForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", Validators.required),
    textComments: new FormControl("", Validators.required)
  });

  private unsubcribe$ = new Subject<void>();

  constructor(private modalService: NgbModal) { }

  phonebookArray: IPhonebook[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '123-456-7890',
      textComments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      phoneNumber: '987-654-3210',
      textComments: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  ngOnDestroy(): void {
    this.unsubcribe$.next();
    this.unsubcribe$.complete();
  }

  saveChanges(): void {
    if (this.phonebookForm.valid) {
      console.log(this.phonebookForm);
    }
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  closeModal(): void {
    this.modalService.dismissAll()
  }

  deletePhonebook(): void {

  }

  editPhonebook(): void {

  }
}
