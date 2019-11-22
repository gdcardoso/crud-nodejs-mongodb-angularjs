import { PlanService } from "./../shared/plan.service";
import { Component, OnInit } from "@angular/core";
import { Plan } from "../shared/plan";

@Component({
  selector: "app-plans-list",
  templateUrl: "./plans-list.component.html",
  styleUrls: ["./plans-list.component.css"]
})
export class PlansListComponent implements OnInit {
  title: string = "Planos";
  plans: Plan[];

  constructor(private PlanService: PlanService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.PlanService.getAll().subscribe(resp => {
      this.plans = resp;
    });
  }

  remove(id) {
    this.PlanService.remove(id).subscribe(() => {
      // pode apenas excluir o elemento do array sem precisar consultar o servidor novamente
      // this.plan = this.plans.filter(p => p !== plan);
      // ou pode buscar os plano novamente
      this.getAll();
    });
  }
}
