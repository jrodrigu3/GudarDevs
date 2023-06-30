import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IPhonebook } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';

const BASE_URL = "";
@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  savePhonebook(data: IPhonebook): Observable<IPhonebook> {
    return this.http
      .post<IPhonebook>(`${BASE_URL}/url`, data);
  }



}
