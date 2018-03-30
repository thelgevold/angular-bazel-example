import { NgModule } from "@angular/core";

import { HelloWorldComponent } from "./hello-world.component";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
  imports: [HttpModule, CommonModule]
})
export class HelloWorldModule {}
