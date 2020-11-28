import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReplacePipe } from '../pipe/replace.pipe';
import { StarModule } from '../shared/component/star/star.module';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe
  ],
  imports:[
    FormsModule,
    CommonModule,
    StarModule,
    RouterModule.forChild([
      {
        path:'courses',
        component: CourseListComponent
      },
      {
        path:'courses/info/:id',
        component:CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule{

}
