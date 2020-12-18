import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../shared/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {

  @Input() 
  public musics: Music[];
  

  constructor() {

   }

  ngOnInit(): void {
  }

}
