import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupportRequest} from './models/request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getRequestByID(id: string): Observable<SupportRequest> {
    return this.http.get<SupportRequest>(`/api/requests/${id}`);
  }

  deleteRequestByID(id: string) {
    return this.http.delete(`/api/requests/${id}`)
  }

  editRequestByID(id: string, request: SupportRequest) {
    let body = new HttpParams()
      .append('title', request.title)
      .append('id', request.id)
      .append('info', request.info)
      .append('description', request.description)
      .append('isItFreshInstall', request.isItFreshInstall)
      .append('stepsToReproduce', request.stepsToReproduce)
      .append('customerExpectation', request.customerExpectation)
      .append('oneMachineOrAll', request.oneMachineOrAll)
      .append('hotfixes', request.hotfixes)
      .append('relatedDocuments', request.relatedDocuments)
      .append('troubleshooting', request.troubleshooting)
      .append('dataCollection', request.dataCollection)
      .append('requestStatus', request.requestStatus)
      .append('storage', request.storage)
    console.log(body.toString());
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
    return this.http.put(`/api/requests/${id}`, body.toString(),options)
  }
}
