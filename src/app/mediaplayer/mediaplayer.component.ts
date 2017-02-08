import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.scss']
})
export class MediaplayerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  media = () => {
    this.route.params.subscribe((params: any) => {
        console.log(params);
    });
  }

  ngOnInit() {
  }

}
