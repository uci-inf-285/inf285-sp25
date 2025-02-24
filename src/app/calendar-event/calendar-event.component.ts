import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  imports: [],
  templateUrl: './calendar-event.component.html',
  styleUrl: './calendar-event.component.css'
})
export class CalendarEventComponent {
  @Input() event:any = undefined;
  @Input() defaults:any = undefined;

  ngOnInit() {
    this.processDefaults();
    this.populatePlaces();
  }

  processDefaults() {
    if(this.defaults) {
      Object.keys(this.defaults).forEach((key) => {
        if(!(key in this.event)) {
          this.event[key] = this.defaults[key];
        } else if(typeof this.defaults[key] === 'object'){
          Object.keys(this.defaults[key]).forEach((innerKey) => {
            if(!(innerKey in this.event[key])) {
              this.event[key][innerKey] = this.defaults[key][innerKey];
            }
          });
        }
      });
    }
  }

  populatePlaces() {
    if(this.event.place) {
      this.event['places'] = [this.event.place];
    }
    if(this.event.places) {
      for(let i=0;i<this.event.places.length; i++) {
        let startTime = new Date();
        if('time' in this.event.places[i]) {
          let timestamp = this.event.places[i].time.split(':');
          startTime.setHours(timestamp[0], timestamp[1], 0, 0);
          let startTimeStr = new Intl.DateTimeFormat("en-US", {hour:'numeric', minute:'numeric'}).format(startTime);
          let endTime = new Date().setTime(startTime.getTime() + this.event.places[i].duration * 60 * 1000);
          let endTimeStr = new Intl.DateTimeFormat("en-US", {hour:'numeric', minute:'numeric'}).format(endTime);
          this.event.places[i].timeStr = startTimeStr + '-' + endTimeStr;
        }
      }
    }
  }
}
