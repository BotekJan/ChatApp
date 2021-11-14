import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  form = "";
  constructor(private router: Router) {
    this.form = this.router.url;
  }

  ngOnInit() {
  }
}
