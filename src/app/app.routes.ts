import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { ResourcesComponent } from './resources/resources.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent},
	{ path: 'assignments', component: AssignmentsComponent},
	{ path: 'syllabus', component: SyllabusComponent},
	{ path: 'resources', component: ResourcesComponent},
	{ path: 'calendar', component: CalendarComponent}
];
