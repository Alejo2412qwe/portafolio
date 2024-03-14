import { Component, OnInit } from '@angular/core';
declare const cambiarIdioma: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
    this.loadScript('/assets/scripts/scripts.js');
  }

  private loadScript(url: string) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
}
