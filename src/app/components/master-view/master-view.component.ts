import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'iv-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MasterViewComponent {

  @Input() images: any[];
  @Output() selectedImage: EventEmitter<number> = new EventEmitter<number>();

  public trackByFn(index, item) {
    return `${item.id}_${index}`;
  }

  public handleSelectImage = (index) => {
    this.selectedImage.emit(index);
  };

}
