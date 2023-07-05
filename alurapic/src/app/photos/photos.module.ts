import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [ PhotoComponent ], //é como se fosse o private de java
    exports: [ PhotoComponent ] //explicitamos quem pode usar
})
export class PhotosModule {}