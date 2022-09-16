import { Injectable } from '@angular/core';
import { data, details } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSource = data;
  details = details;

  constructor() { }

  getDetails(id: number) {
    let filtered = this.details.find(detail => detail.id === id);

    return filtered?.details || []
  }

  getDetailsCount(id: number) {
    return this.details.find(detail => detail.id === id)?.details.length || 0
  }
}
