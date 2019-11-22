import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Plan } from "../shared/plan";

@Injectable({
  providedIn: "root"
})
export class PlanService {
  private URL = "http://localhost:3333/crud";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Plan[]>(this.URL);
  }

  getById(id: string) {
    const url = `${this.URL}/${id}`;
    return this.http.get<Plan>(url);
  }

  insert(plan: Plan) {
    return this.http.post<Plan>(this.URL, plan);
  }

  update(plan: Plan) {
    return this.http.put<Plan>(this.URL, plan);
  }

  remove(id: string) {
    const url = `${this.URL}/${id}`;
    return this.http.delete<Plan>(url);
  }
}
