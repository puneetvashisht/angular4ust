import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h3>Our First Angular Component</h3>
            <hr/>
            <ust-badge></ust-badge>
        </div>
    `
})
export class AppComponent {

    constructor() { }

}