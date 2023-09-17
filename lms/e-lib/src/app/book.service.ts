import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from './book.model';
import { map } from 'rxjs/operators';
import { SearchBook } from './book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BehaviorSubject<SearchBook[]> = new BehaviorSubject<SearchBook[]>([]);
  private searchCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private filterCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private apiUrl = 'https://example.com/api/books'; 


  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getSearchCount(): Observable<number> {
    return this.searchCount.asObservable();
  }

  getFilterCount(): Observable<number> {
    return this.filterCount.asObservable();
  }

  searchBooks(searchQuery: string): Observable<SearchBook[]> {
    return this.books.pipe(
      map(books => {
        // Filter the books based on the search query
        return books.filter(book => {
          const searchTerm = searchQuery.toLowerCase();
          // Check if the book name, author, genre, or year of publishing contains the search query
          return (
            book.name.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.genre.toLowerCase().includes(searchTerm) ||
            book.year.toString().includes(searchTerm)
          );
        });
      })
    );
  }
  
  

  filterBooks(criteria: string, pageNumber: number, pageSize: number): Observable<Book[]> {
    const params = new HttpParams().set('criteria', criteria);
    return this.http.get<Book[]>('/api/books', { params }).pipe(
      map(books => {
        this.books.next(books);
        this.filterCount.next(books.length);
        return books;
      })
    );
  }

  getSearchSuggestions(query: string): Observable<string[]> {
    const params = new HttpParams().set('query', query);
    return this.http.get<string[]>('/api/search-suggestions', { params });
  }

  getBookDetailsByName(bookName: string): Observable<SearchBook | undefined> {
    return this.books.pipe(
      map((books: SearchBook[]) => books.find((book: SearchBook) => book.name === bookName) as SearchBook | undefined)
    );
  }
  

}
