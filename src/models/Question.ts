import {Type} from "./Type.ts";

export interface Question {
    id : number;
    type: Type;
    question: string;
    isInProgres: boolean;
}

export interface QuestionSearchCriteria {
    idType : number;
    question? : string;
    isInProgress? : boolean;
}