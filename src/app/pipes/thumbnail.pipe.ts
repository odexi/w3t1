import { FrontComponent } from './../front/front.component';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

    transform(filename: string, thumbnail: string): any {
    if(thumbnail === 'small') {
      filename = filename.substr(0).slice(0, -4);
      return filename + '-tn160.png';
    } else if(thumbnail === 'medium') {
      filename = filename.substr(0).slice(0, -4);
      return filename + '-tn320.png';
    } else if(thumbnail === 'large') {
      filename = filename.substr(0).slice(0, -4);
      return filename + '-tn640.png';
    }

    return filename;
  }

}
