
export default class RouteName {

    /*--------ADMIN-------------*/

    static adminRoutes = {
        racine: "/admin",
        dashboard: "dashboard",
        question: "question"
    };

    static loginAdmin : string = this.adminRoutes.racine + "/login";
    static dashboardAdmin : string = this.adminRoutes.racine + "/" +this.adminRoutes.dashboard;
    static questionAdmin : string = this.adminRoutes.racine + "/" +this.adminRoutes.question;


    /*----------------------------*/

    /*---------CANDIDATE---------------*/
    static candidateRacine : string = "/candidate";
    static candidateLogin : string = this.candidateRacine + "/login"

    /*-----------------------------------*/
}