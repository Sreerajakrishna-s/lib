import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  loading: boolean = true;
  
  ngOnInit() {
    // Simulating data loading delay
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
