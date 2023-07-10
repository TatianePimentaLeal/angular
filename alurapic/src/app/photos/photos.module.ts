import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ //é como se fosse o private de java
        PhotoComponent, 
        PhotoListComponent 
    ], 
    imports: [ HttpClientModule ]
})
export class PhotosModule {}