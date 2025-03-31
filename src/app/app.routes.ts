import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ResourcesComponent } from './resources/resources.component';
import { CalendarComponent } from './calendar/calendar.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
	{ path: 'assignments', component: AssignmentsComponent},
	{ path: 'syllabus', component: SyllabusComponent},
	{ path: 'resources', component: ResourcesComponent},
	{ path: 'calendar', component: CalendarComponent},
	{ path: 'assignments/a1', component: A1Component},
	{ path: 'assignments/a2', component: A2Component},
];
