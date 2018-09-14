

export class NavigationService{

    private pagesToDisplayWithMainHeader = ["app-project-gallery", "app-projects-gallery", "app-home", "app-documents"];

    private currentPage : string;

    public setCurrentPage(currentPage : string) : void{
        console.log("The current page is now : " + currentPage);
        this.currentPage = currentPage;        
    }

    public whichIsTheHeaderToDisplay () : string{
        if (this.pagesToDisplayWithMainHeader.indexOf(this.currentPage)){
            console.log("Header is now: mainHeader");
            
            return "mainHeader";
        }

        else{
            console.log("Header is now: secondHeader");
            return "secondHeader";
        }
    }

}


export const NavigationServiceData = new NavigationService();