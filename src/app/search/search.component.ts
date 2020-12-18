import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItuneService } from '../shared/itune-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() submit: boolean;

  constructor(public ituneService: ItuneService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.ituneService.searchMusic(form.value.search);

  }

}
