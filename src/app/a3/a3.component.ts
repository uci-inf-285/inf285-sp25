import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeUtils } from '../time-utils';

@Component({
  selector: 'app-a3',
  imports: [],
  templateUrl: './a3.component.html',
  styleUrl: './a3.component.css'
})
export class A3Component {
  assignments:any;

  constructor(private http:HttpClient) {
    this.http.get('calendar.json').subscribe(calendar => {
      this.parseAssignment(calendar as {}, 'A3');
    });
  }

  parseAssignment(calendar:any, assignment:string) {
    let events:any[] = calendar['events'];

    //Filter to this assignment
    this.assignments = events.filter(e => e['type'] == 'assignment' && e['title'] == assignment);
    
    //Set due date
    this.assignments.forEach((assignment:any) => {
      let due = new Date(assignment.date + " " + calendar['defaults'].assignment.due + " GMT" + TimeUtils.getTimezoneOffset());
      assignment['dueStr'] = new Intl.DateTimeFormat("en-US", {month: "long", day: 'numeric', year: 'numeric', hour:'numeric', minute:'2-digit'}).format(due);
    });
  }
}
