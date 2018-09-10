
import { Projet } from '../model/projet';

export function getRootPath() {
  return './assets/pictures/';
}

export function getProjectsRootPath() {
  return './assets/projets/'
}

export function getDocumentsRootPath() {
  return './assets/documents/';
}

export function getFilesExtension() {
  return '.png';
}

export function getPictures() {
  const outputArray = [
    'photoGroupe',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8', 
    '9', 
    '10', 
    '11', 
    '12', 
    '13'
  ];

  return outputArray;
}


export function getProjets() {
  const outputArray = [
    new Projet("Activ'dos a été créée pour l'Assurance Maladie par la Mobile Factory pour vous aider à prendre soin et à préserver votre dos au quotidien. Réalisée en hybride.", 3, 'activDos', 'Activ\'dos', "4a65a5"),
    new Projet("BforBank est l'application de la banque en ligne pour la gestion des comptes et services bancaires tel que les CB, les livrets, le compte courant et la gestion du budget. Réalisé en natif.", 4, 'bforbank', 'BforBank' , '493526'),
    new Projet('Ma Flotte VE permet le monitoring des véhicules et des bornes électriques sur les différents sites Enedis. Réalisé en hybride.', 3, 'maflotte', 'Ma Flotte VE', "005eb8"),
    new Projet('MES est une application créée pour les techniciens Airbus afin de répertorier leurs opérations du jour à effectuer. Cette solution est en place sur le site de Saint-Nazaire et s’étend progressivement vers les autres sites d’assemblage Airbus. Réalisée en Android.', 3, 'lighthouse', 'Mon Eternel S', '00205b'),
    //new Projet('We Love Aero, application pour avoir toutes les informations pratiques des Air Shows et accéder à du contenu live inédit. Réalisé en natif.', 3, 'weloveaero', 'We Love Aero')
  ];

  return outputArray;
}

export function getDocuments() {
  const outputArray = [
    { doc: 'Digital-Interaction', ext: 'pdf', pic: 'Digital-Interaction---Sopra Steria---V2018.png' },

    { doc: 'MobileFactory', ext: 'pdf', pic: 'Sopra Steria_MobileFactory-V2018.png' },

    { doc: 'frise', ext: 'png', pic: 'frise.png' }

  ];

  return outputArray;
}
