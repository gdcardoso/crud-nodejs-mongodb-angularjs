import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PlansFormComponent } from "./plans/plans-form/plans-form.component";
import { PlansListComponent } from "./plans/plans-list/plans-list.component";

const appRoutes: Routes = [
  { path: "planos", component: PlansListComponent },
  { path: "planos/novo", component: PlansFormComponent },
  { path: "planos/editar/:id", component: PlansFormComponent },
  { path: "", redirectTo: "/planos", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, PlansFormComponent, PlansListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
