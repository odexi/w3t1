import { MediaService } from './../services/media.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.scss']
})
export class MediaplayerComponent implements OnInit {

  private media: any = [];
  private id;
  

  constructor(private route: ActivatedRoute, private mediaService: MediaService) { }


  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
      this.viewMedia(this.id);
    });
  }
  
  viewMedia = (fileId) => {
    this.mediaService.getMedia(fileId).subscribe(
      (res) => {
        this.media = res;
        console.log(this.media.user_id);
      }
    );
  }

}
