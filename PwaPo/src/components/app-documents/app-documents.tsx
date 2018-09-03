import { Component, State } from '@stencil/core';
import { getDocuments, getDocumentsRootPath } from '../../helpers/dataHelper';

@Component({
    tag: 'app-documents',
    styleUrl: 'app-documents.scss'
})
export class AppDocuments {

    @State() element;

    @State() rootPath: string;

    @State() files;

    componentWillLoad() {
        this.rootPath = getDocumentsRootPath();
        this.files = getDocuments();
    }

    componentDidLoad() {
        console.log('The component has been rendered');
    }

    render() {

        return (

            <ion-content>
                <ion-list >
                    {this.files ? this.files.map((file) => {

                        return <ion-item>
                            <ion-thumbnail item-start class='margined_thumbnail'>
                                <img src={this.rootPath + file.pic} />
                            </ion-thumbnail>
                            <div class='verticalDiv'>
                                <h2>
                                    {file.doc}
                                </h2>
                                <h3 class='greyText'>
                                    {'fichier ' + file.ext}
                                </h3>
                            </div>
                            <a class='openButton' target="_self" href={this.rootPath + file.doc + '.' + file.ext} download={file.doc + '.' + file.ext}>
                                <ion-icon item-right class='openImg' name='eye'> </ion-icon>
                            </a>
                        </ion-item>;


                    }) : ""}

                </ion-list>
            </ion-content>

        );
    }
}
