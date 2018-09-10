export class Projet {
    screenshots: string[];
    description: string;
    directoryName: string;
    projetName: string;
    couleur : string;

    constructor(message: string, screenshotsCount: number, directoryName: string, projetName: string, couleur: string) {
        this.description = message;
        this.screenshots = new Array();
        for (var i = 1; i <= screenshotsCount; i++) {
            this.screenshots.push(String(i));
        }

        this.directoryName = directoryName;
        this.projetName = projetName;
        this.couleur = couleur;
    }
}