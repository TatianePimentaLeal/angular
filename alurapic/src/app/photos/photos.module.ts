import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ PhotoComponent ], //é como se fosse o private de java
    exports: [ PhotoComponent ], //explicitamos quem pode usar
    imports: [ HttpClientModule ]
})
export class PhotosModule {}