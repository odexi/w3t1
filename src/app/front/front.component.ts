import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  private images: any = [];

  constructor(private mediaservice: MediaService) {
  }

  ngOnInit() {

    this.mediaservice.getNew().subscribe(
      (res) => {
        this.images = res.json();
        console.log(this.images);
      }
    );
  }

}
