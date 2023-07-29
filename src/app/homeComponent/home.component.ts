import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counterService/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
  }

  add() {
    this.value = this.counterService.increment(this.value);
  }

  substract() {
    this.value = this.counterService.decrement(this.value);
  }

}
