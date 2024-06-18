export default class UrlApiStorage {
    static initialUrlApi : string = "http://localhost:8080";
    /*---------------------------*/
    static adminInitialUrl : string = this.initialUrlApi + "/admin";

    static adminLogin : string = this.adminInitialUrl + "/login";
    static adminGet : string = this.adminInitialUrl + "/get-";
    static questionsGetAdmin = this.adminInitialUrl + "/question";

    /*---------------------------*/
    static candidateInitialUrl : string = this.initialUrlApi + "/candidate";
}