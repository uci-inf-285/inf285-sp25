import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import moment from 'moment';

@Component({
  selector: 'app-assignments',
  imports: [],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  assignments:any[] = [
    {'title': 'A1',
      'name': 'Widget Factory in Adobe Spectrum',
      'parts': [] },
    {'title': 'A2',
      'name': 'Enrollment Guide in JavaScript',
      'parts': [] },
      {'title': 'A3',
        'name': 'Accessibility Browser Extension',
        'parts': [] }
  ];

  constructor(private http:HttpClient) {
  	this.http.get('calendar.json').subscribe(calendar => {
  		this.parseCalendar(calendar as {});
  	});
  }

  parseCalendar(calendar:any) {
    let events:any[] = calendar['events'];
    //Add date string to each event
    events.map(e => {
      let hhmm = calendar['defaults']['assignment']['due'].split(":");
      let dueDate = moment(e['date']);
      dueDate.hours(hhmm[0]);
      dueDate.minutes(hhmm[1])
      e['due'] = dueDate.format('dddd, MMMM Do, h:mma');
      return e;
    });
    //Filter by type
    let assignmentList = events.filter(e => e['type'] == 'assignment');
    assignmentList.forEach(((assignment) => {
      for(let i=0; i<this.assignments.length;i++) {
        if(this.assignments[i].title == assignment.title) {
          this.assignments[i].parts.push(assignment);
        }
      }
    }));
    console.log(this.assignments);
  }
}
