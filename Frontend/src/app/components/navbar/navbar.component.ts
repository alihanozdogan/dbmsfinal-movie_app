import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,

  ) {}

  ngOnInit() {
  }

  
  logOut() {
    this.authenticationService.logOut();
  }
}
