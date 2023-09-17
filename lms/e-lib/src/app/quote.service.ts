

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private quotes: string[] = [
    "The only thing that you absolutely have to know, is the location of the library. - Albert Einstein",
    "A library is a hospital for the mind. - Anonymous",
    "Libraries were full of ideas, perhaps the most dangerous and powerful of all weapons. - Sarah J. Maas",
    // Add more quotes here
  ];

  getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  }
}
