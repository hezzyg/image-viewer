import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'iv-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbnailComponent {

  @Input() image: any;
  @Input() index: number;
  @Input() selectImage: any;

}
