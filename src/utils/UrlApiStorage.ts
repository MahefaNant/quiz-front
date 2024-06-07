export default class UrlApiStorage {
    static initialUrlApi : string = "http://localhost:8080";
    /*---------------------------*/
    static adminInitialUrl : string = this.initialUrlApi + "/admin";

    static adminLogin : string = this.adminInitialUrl + "/login";

    /*---------------------------*/
    static candidateInitialUrl : string = this.initialUrlApi + "/candidate";
}