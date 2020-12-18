import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AppConfig, APP_CONFIG } from "../app-config/app-config.module";
import { Music } from "./music";
import { map } from 'rxjs/operators';

@Injectable()
export class ItuneService {

    public music: Music[];
    public query: string;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {

    }

    public searchMusic (queryTitle: string) {
        this.query = queryTitle;
        this.http.get(`${this.config.apiEndpoint}search?term=${this.query}`).pipe(
            map(data => {
                const res: any = data;
                console.log(res.results);
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
