import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mfe1-device',
    template: `
        <div class="task">
            <h1>Upload/Download Modules</h1>
            <mfe1-upload></mfe1-upload>
            <img src="http://localhost:3000/assets/download.png">
            <p>Download</p>
   
        </div>
    `
})

export class DeviceComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}