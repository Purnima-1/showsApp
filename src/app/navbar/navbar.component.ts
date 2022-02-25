import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = new FormControl();
  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
   
  }

}
