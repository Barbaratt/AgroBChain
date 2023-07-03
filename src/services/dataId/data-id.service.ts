import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataIdService {
  private data: { [id: string]: string[] } = {};

  constructor() {}

  setData(id: string, dados: string[]): void {
    this.data[id] = dados;
  }

  getData(id: string): string[] | undefined {
    return this.data[id];
  }
}
