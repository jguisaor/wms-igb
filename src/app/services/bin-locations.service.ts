import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { GLOBAL } from './global';

@Injectable()
export class BinLocationService {
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    public listAvailablePickingCarts() {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'X-Company-Name': localStorage.getItem('igb.selectedCompany')
        });
        return this._http.get(this.url + 'binlocation/picking-carts', { headers: headers })
            .map(res => res.json());
    }
}
