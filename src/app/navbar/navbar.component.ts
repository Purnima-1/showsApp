import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)]);
  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
   this.search.valueChanges
   .pipe(debounceTime(1000))
   .subscribe((searchValue: string)=>{
    if (!this.search.invalid){
      this.searchEvent.emit(searchValue)
    }
   })
  }

}
