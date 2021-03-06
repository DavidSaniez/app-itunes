import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Music } from "../models/music";
import { map } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from "src/app/app-config/app-config.module";
import { Subscription } from "rxjs";

@Injectable()
export class ItuneService {

    public music: Music[];
    public query: string;
    musicsSubscription: Subscription;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    ngOnDestroy() {
        if (this.musicsSubscription) {
            this.musicsSubscription.unsubscribe();
          }
    }

    public searchMusic (queryTitle: string) {
        this.query = queryTitle;
        this.musicsSubscription = this.http.get(`${this.config.apiEndpoint}search?term=${this.query}`).pipe(
            map(data => {
                const res: any = data;
                return res.results ? res.results : [];
            })
        ).subscribe((music) => this.music = music)
    }

    public musicFactory(item: any) : Music {
        return new Music (
            item.artistName,
            item.artistViewUrl,
            item.artworkUrl30,
            item.artworkUrl60,
            item.artworkUrl100,
            item.collectionName,
            item.trackName,
            item.trackId
        )
    }

}
