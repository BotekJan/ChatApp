import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chatsPage = true;

  constructor(private router : Router) { 
    this.chatsPage = router.url ==="/Home"
  }

  ngOnInit(): void {
  }

}
