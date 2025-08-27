import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptionsArgs, RequestOptions } from "@angular/http";

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('ambepToken'))
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        const newOptions = super.merge(options);
        newOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem('ambepToken'));
        return newOptions;
    }
}