import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  vcard = [{name: 'Kevin'}];

  constructor(public cd: ChangeDetectorRef) {
    // this.cd.detach();
  }

  ngOnInit() {
    setTimeout(() => {
      this.vcard.push({name: 'Jeff'});
      console.log('root push');
      // this.cd.detectChanges();
    }, 1000);
  }
  ngOnChanges() {
    console.log('root Node in OnChanges Event');
  }

  ngDoCheck() {
    console.log('root Node in DoCheck Event');
  }
}
