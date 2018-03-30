import { NgModule } from "@angular/core";

import { HelloWorldComponent } from "./hello-world.component";
import { JsonpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
  imports: [JsonpModule, CommonModule]
})
export class HelloWorldModule {}
