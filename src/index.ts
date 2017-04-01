import * as ng from 'angular';

import { Reasy, NgReasy } from 'reasy-js';
import { StudentsEntities } from './reasy-entities/students.reasy.service';
import { ClassesEntities } from './reasy-entities/classes.reasy.service';



console.log(ng.version.full);

ng.module('playground', [Reasy.Module.name])
    .run(function(studentsEntities: StudentsEntities,
                  classesEntities: ClassesEntities) {
        console.log('running reasy');
        studentsEntities.id(32).get();
        classesEntities.id(4).get();
        classesEntities.studentsEntities.get();
        classesEntities.id(3).studentsEntities.get();
    })
    .config(function(reasyStoreProvider: NgReasy.IReasyStore) {
        reasyStoreProvider.addResources([
            { provide: 'studentsEntities', use: StudentsEntities },
            { provide: 'classesEntities', use: ClassesEntities }
        ]);
    });