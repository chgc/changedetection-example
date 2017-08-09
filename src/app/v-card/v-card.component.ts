import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-v-card',
  templateUrl: './v-card.component.html',
  styleUrls: ['./v-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VCardComponent implements OnInit, OnChanges, DoCheck {
  @Input() data;

  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }

  ngOnInit() {
    setTimeout(() => {
      this.data.push({name: 'Jay'});
      console.log('first children push');
      // this.cd.markForCheck();
      // this.cd.detectChanges();
    }, 1500);
  }
  ngOnChanges() {
    console.log('2nd Node in OnChanges Event');
  }

  ngDoCheck() {
    console.log('2nd Node in DoCheck Event');
  }
}
