import { BaseUrl, ReasyDataCollection, ReasyDataItem, ReasyItem, child } from 'reasy-js';
import { ClassesEntities } from './classes.reasy.service';

export class StudentModel {
    fullName: string;
    dob: string;
    getAge(): number {
        return 43;
    }
}

export class StudentEntity extends ReasyDataItem<StudentModel> {
    // classesEntities: ClassesEntities;
}


@BaseUrl('students')
@ReasyItem(StudentEntity)
export class StudentsEntities extends ReasyDataCollection<StudentModel, StudentEntity> {

    // @child({ // https://github.com/dmifsud/ReasyJs/issues/4
    //     provide: 'classesEntities',
    //     use: ClassesEntities
    // })
    // classesEntities: ClassesEntities;
}
