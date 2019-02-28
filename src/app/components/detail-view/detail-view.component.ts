import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'iv-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent implements OnInit, OnDestroy {

  private inputChange: Subject<string> = new Subject<string>();
  private unsubscribeOnDestroy: Subject<any> = new Subject();
  public fadeImageAnimation: boolean;

  @Input() index: number;
  @Input() image: any;
  @Input() updateImageDescription: any;
  @Input() deleteImage: any;

  ngOnInit() {
    this.subscribeToInputChanges();
  }

  subscribeToInputChanges() {
    this.inputChange.pipe(
      takeUntil(this.unsubscribeOnDestroy),
      debounceTime(300)
    ).subscribe(value => this.updateImageDescription(this.index, value));
  }

  public handleDescriptionChange() {
    const {description} = this.image;
    this.inputChange.next(description);
  }

  ngOnDestroy() {
    this.unsubscribeOnDestroy.next(true);
    this.unsubscribeOnDestroy.complete();
  }
}
