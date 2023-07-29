import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  increment(count: number): number {
    let value = count + 1;
    return value;
  }

  decrement(count: number): number {
    let value = count - 1;
    return value;
  }

}
