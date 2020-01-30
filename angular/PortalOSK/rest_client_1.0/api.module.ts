import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CandidatesControllerService } from './api/candidatesController.service';
import { CategoriesControllerService } from './api/categoriesController.service';
import { CoursesCategoriesControllerService } from './api/coursesCategoriesController.service';
import { CoursesControllerService } from './api/coursesController.service';
import { CoursesInstructorsControllerService } from './api/coursesInstructorsController.service';
import { CoursesStudentsControllerService } from './api/coursesStudentsController.service';
import { InstructorsCategoriesControllerService } from './api/instructorsCategoriesController.service';
import { InstructorsLessonsControllerService } from './api/instructorsLessonsController.service';
import { InstructorsStudentsControllerService } from './api/instructorsStudentsController.service';
import { InstuctorsControllerService } from './api/instuctorsController.service';
import { LessonsControllerService } from './api/lessonsController.service';
import { PaymentsControllerService } from './api/paymentsController.service';
import { PingControllerService } from './api/pingController.service';
import { StudentsControllerService } from './api/studentsController.service';
import { StudentsLessonsControllerService } from './api/studentsLessonsController.service';
import { StudentsPaymentsControllerService } from './api/studentsPaymentsController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CandidatesControllerService,
    CategoriesControllerService,
    CoursesCategoriesControllerService,
    CoursesControllerService,
    CoursesInstructorsControllerService,
    CoursesStudentsControllerService,
    InstructorsCategoriesControllerService,
    InstructorsLessonsControllerService,
    InstructorsStudentsControllerService,
    InstuctorsControllerService,
    LessonsControllerService,
    PaymentsControllerService,
    PingControllerService,
    StudentsControllerService,
    StudentsLessonsControllerService,
    StudentsPaymentsControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
