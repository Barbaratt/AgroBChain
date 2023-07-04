import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZipCodeService {
  constructor(private http: HttpClient) {}

  public getZipCode(zipCode: string) {
    return this.http.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  }
}
