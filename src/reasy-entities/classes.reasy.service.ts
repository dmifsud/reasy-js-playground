import { StudentModel, StudentsEntities } from './students.reasy.service';
import { ReasyDataItem, ReasyDataCollection, BaseUrl, ReasyItem, child, NgReasy } from 'reasy-js';

export class ClassModel {
    name: string;
    students: Array<StudentModel>
}

export interface IClassesEntities {
    studentsEntities: StudentsEntities;
}

export class ClassEntity extends ReasyDataItem<ClassModel> implements IClassesEntities {
    studentsEntities: StudentsEntities;
}

@BaseUrl('classes')
@ReasyItem(ClassEntity)
export class ClassesEntities extends ReasyDataCollection<ClassModel, ClassEntity> implements IClassesEntities {
    @child({
        provide: 'studentsEntities',
        use: StudentsEntities
    })
    studentsEntities: StudentsEntities;
}