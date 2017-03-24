import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { CourseComponent }      from './course/course.component';
import { CourseCreateComponent } from './course/course-create.component';
import { CourseDetailComponent }  from './course/course-detail.component';
import { QuizStudentComponent }  from './quiz/quiz-student.component';

import { QuizCreateComponent }  from './quiz/quiz-create.component';
import { LoginComponent } from './auth/login';
import { RegisterComponent } from './auth/register';

import { CourseJoinComponent } from './course/course-join.component';

import { HomeComponent } from './home';
import { AuthGuard } from './auth/_guards/index';

<<<<<<< HEAD
import { StudentViewComponent } from './live/view.student.component'
import { LecturerViewComponent } from './live/view.lecturer.component'

=======
import { StudentViewComponent } from './live/view.student.component';
>>>>>>> bc146d956a500d98719eef06e25ea3679c89cf29


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'courses/join',     component: CourseJoinComponent },
  { path: 'courses',     component: CourseComponent },
  { path: 'quiz',     component: QuizStudentComponent },
  { path: 'quiz/create',     component: QuizCreateComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'register',     component: RegisterComponent },
  { path: 'courses/create',     component: CourseCreateComponent },
  { path: 'student-voting',    component: StudentViewComponent},
  { path: 'lecture/:id/live/lecturer',    component: LecturerViewComponent},
  { path: 'lecture/:id/live/student', component: StudentViewComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
