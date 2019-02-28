import {Component, OnInit} from '@angular/core';
import {HttpService} from './core/http.service';

@Component({
  selector: 'iv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public images: any[];
  public selectedIndex: number = 0;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.getLivePhotos();
  }

  getLivePhotos() {
    this.httpService.getLivePhotos()
      .subscribe(
        images => this.images = images,
        error => this.getBackupPhotos()
      );
  }

  getBackupPhotos() {
    this.httpService.getBackupPhotos().subscribe(images => this.images = images.data);
  }

  public updateImageDescription = (index, description) => {
    const image: any = this.images[index];
    image.description = description;
    this.images[index] = {...image};

    this.images = [...this.images];
  };

  public deleteImage = (index) => {
    this.images.splice(index, 1);
    this.selectedIndex = 0;
    this.images = [...this.images];
  };

}
