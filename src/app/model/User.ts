export interface User {
    id: number,
    user: string,
    active: boolean
}

export interface NewUser {
    user: string, 
    active: boolean, 
    password: string
}

export interface Person{
    curp: string, 
    names: string, 
    lastNameMother: string, 
    lastNameFather: string, 
    borningDate: Date, 
    age: number
}

export interface Group {
    grade: number; 
    group: string
}

export interface submitUser{
    user: NewUser, 
    person: Person, 
    group: Group
}

export interface Student{
    curp: string, 
    group: number
}

export interface homework {
    text: string;
    isChecked: boolean;
}

export interface completHomework {
    title: string,
    subject: string, 
    group: Group, 
    homework: homework
}

export interface note {
    text: string,
    good: icon 
}

export type icon = '✔️' | '❌'

