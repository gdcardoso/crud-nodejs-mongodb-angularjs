import { PlanService } from "./../shared/plan.service";
import { Component, OnInit } from "@angular/core";
import { Plan } from "../shared/plan";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-plans-form",
  templateUrl: "./plans-form.component.html",
  styleUrls: ["./plans-form.component.css"]
})
export class PlansFormComponent implements OnInit {
  plan: Plan;
  title: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private planService: PlanService
  ) {}

  ngOnInit() {
    this.title = "Novo Plano";
    this.plan = new Plan();

    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.planService.getById(id).subscribe(resp => {
        this.plan = resp;
        this.title = `Plano: ${this.plan.code}`;
      });
    }
  }

  onSubmit() {
    let observable: Observable<Plan>;

    if (this.plan.code) {
      observable = this.planService.update(this.plan);
    } else {
      observable = this.planService.insert(this.plan);
    }

    observable.subscribe(() => {
      this.router.navigate(["/planos"]);
    });
  }
}
