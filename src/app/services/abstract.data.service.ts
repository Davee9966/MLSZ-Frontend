import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export abstract class AbstractDataService<T> {
  constructor(
    private _http: HttpClient,
    protected actionUrl: string,
    protected dataType: string
  ) {}

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(
      `${this.actionUrl}${this.dataType}`
    ) as Observable<T[]>;
  }
  getOne(id: number): Observable<T> {
    return this._http.get<T>(
      `${this.actionUrl}${this.dataType}/${id}`
    ) as Observable<T>;
  }
  create(data: T): Observable<any> {
    return this._http.post(
      `${this.actionUrl}${this.dataType}/create`,
      JSON.stringify(data)
    ) as any;
  }
  put(id: number, data: T): Observable<any> {
    return this._http.put(
      `${this.actionUrl}${this.dataType}/edit/${id}`,
      JSON.stringify(data)
    ) as any;
  }
  delete(id: number) {
    return this._http.delete(`${this.actionUrl}${this.dataType}/delete/${id}`);
  }
}
