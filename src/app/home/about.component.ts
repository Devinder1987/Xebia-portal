import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    template: `<div>This is the about page.</div>`
})

export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
