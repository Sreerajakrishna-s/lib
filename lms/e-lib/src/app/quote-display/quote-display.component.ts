// quote-display.component.ts

import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css'],
})
export class QuoteDisplayComponent implements OnInit {
  randomQuote: string='';

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.randomQuote = this.quoteService.getRandomQuote();
  }
}
