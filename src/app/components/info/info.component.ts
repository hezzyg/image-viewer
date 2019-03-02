import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'iv-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent {

  @Input() image: any;

}
