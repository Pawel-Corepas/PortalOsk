import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Instructors, InstuctorsControllerService } from 'rest_client_1.0';

@Injectable()
export class InstructorsService {

    instructors = new Subject<Instructors[]>();
   
    constructor(  private instructorsService: InstuctorsControllerService,
               ) {
        this.reloadInstructors()
        
    }

    reloadInstructors(){
        this.instructorsService.instuctorsControllerFind().subscribe(
            (instructors) => {
                this.instructors.next(instructors)
                
                console.log(this.instructors)
            }
        )
    }
}