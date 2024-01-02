import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {

  public name!: string;
  public code!: string;
  public price!: number;
  public previousPrice!: number;
  public positiveChange!: boolean;
  constructor() {}

  ngOnInit(): void {
    this.name = 'Acme';
    this.code = 'ACM';
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;
  }
}
