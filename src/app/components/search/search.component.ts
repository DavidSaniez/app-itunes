import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItuneService } from 'src/app/core/services/itune-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public ituneService: ItuneService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.ituneService.searchMusic(form.value.search);

  }

}
