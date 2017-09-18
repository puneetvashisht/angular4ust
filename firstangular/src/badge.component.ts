import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ust-badge',
    template: `
    <button (click)="incrementCount()" class="btn btn-primary" type="button">
        Inbox <span class="badge">{{count}}</span>
    </button>
    `
})
export class BadgeComponent implements OnInit {

    constructor() { }

    count: number = 34

    incrementCount(){
        this.count++;
    }

    ngOnInit() { 

    }

}