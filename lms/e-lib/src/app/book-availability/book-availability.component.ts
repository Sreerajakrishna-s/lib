import { Component } from '@angular/core';
import {  AvailableBook } from '../book.model';

@Component({
  selector: 'app-book-availability',
  templateUrl: './book-availability.component.html',
  styleUrls: ['./book-availability.component.css']
})
export class BookAvailabilityComponent {
  books: AvailableBook[] = []; // Replace Book with your actual book model/interface

  // Fetch books from API or local data source and assign to this.books

  // Example book data
  constructor() {
    this.books = [
      { title: 'Book 1', author: 'Author 1', genre: 'Genre 1', year: 2021, availableCopies: 3 },
      { title: 'Book 2', author: 'Author 2', genre: 'Genre 2', year: 2022, availableCopies: 0 },
      { title: 'Book 3', author: 'Author 3', genre: 'Genre 3', year: 2023, availableCopies: 2 },
      { title: 'Book 4', author: 'Author 4', genre: 'Genre 5', year: 2020, availableCopies: 2 },
      { title: 'Book 5', author: 'Author 5', genre: 'Genre 4', year: 2012, availableCopies: 7 },
      { title: 'Book 6', author: 'Author 6', genre: 'Genre 8', year: 2017, availableCopies: 2 },
      { title: 'Book 7', author: 'Author 7', genre: 'Genre 2', year: 2015, availableCopies: 0 },
      { title: 'Book 8', author: 'Author 8', genre: 'Genre 1', year: 2018, availableCopies: 1 },
      { title: 'Book 9', author: 'Author 3', genre: 'Genre 3', year: 2023, availableCopies: 2 },
      { title: 'Book 10', author: 'Author 4', genre: 'Genre 5', year: 2020, availableCopies: 2 },
      { title: 'Book 11', author: 'Author 5', genre: 'Genre 4', year: 2012, availableCopies: 0 },
      { title: 'Book 12', author: 'Author 6', genre: 'Genre 8', year: 2017, availableCopies: 3 },
    ];
  }

}
