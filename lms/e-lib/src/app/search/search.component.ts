// search.component.ts
import { Component } from '@angular/core';
import { SearchBook } from '../book.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  books: SearchBook[] = [
    { name: 'Book 1', author: 'Author 1', genre: 'Genre 1', year: 2021 },
    { name: 'Book 2', author: 'Author 2', genre: 'Genre 2', year: 2020 },
    { name: 'Book 3', author: 'Author 3', genre: 'Genre 1', year: 2019 },
    { name: 'Book 4', author: 'Author 4', genre: 'Genre 2', year: 2022 },
    // Add more books manually
  ];
  searchResults: SearchBook[] = [];

  searchBooks(): void {
    this.searchResults = this.books.filter(book =>
      book.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.year.toString().includes(this.searchQuery.toLowerCase())
    );
  }
}
