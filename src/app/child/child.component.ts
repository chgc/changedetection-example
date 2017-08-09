import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() data;

  constructor(private cd: ChangeDetectorRef) {
    // this.cd.detach();
  }

  ngOnInit() {
    setTimeout(() => {
      this.data.push({name: 'Poy'});
      console.log('second children push');
      // this.cd.markForCheck();
      // this.cd.reattach();
      // this.cd.detectChanges();
    }, 500);
  }

  ngOnChanges() {
    console.log('3rd node in OnChanges Event');
  }

  ngDoCheck() {
    console.log('3rd node in DoCheck Event');
  }
}
