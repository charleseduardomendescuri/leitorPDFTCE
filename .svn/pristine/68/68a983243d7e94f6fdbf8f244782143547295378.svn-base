import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Processos } from './processos';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root', 
})
export class ProcessosService {


  private baseUrl = '/buscarPaginaDoPdf';

  

  constructor(private http: HttpClient) { }


 

    getProcessosPDF(processo: Object): Observable<Object> {
    return this.http.get(`${this.baseUrl}`, processo);
  }

  getListaDeArquivos(numero: string): Observable<any> {  
    const apiurl = `${this.baseUrl}/listarArquivos?numeroProcesso=${numero}`;
    return this.http.get<any>(apiurl);  
  }  

  getListaDeArquivosHtml(numero: string): Observable<any> {  
    const apiurl = `${this.baseUrl}/listarArquivosHtml?numeroProcesso=${numero}`;
    return this.http.get<any>(apiurl);
  }  

  buscarArquivoHtml(numero: string,nome:string[]): Observable<any> {
    const apiurl = `${this.baseUrl}/buscarArquivoHtml?numeroProcesso=${numero}&nomeArquivoHtml=${nome}`;
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(apiurl, { headers, responseType: 'text'});
  }

 
  imageUrlToBase64(urL: string) {
    return this.http.get(urL, {
        observe: 'body',
        responseType: 'arraybuffer',
      })
      .pipe(
      //  take(1),
        map((arrayBuffer) =>
          btoa(
            Array.from(new Uint8Array(arrayBuffer))
            .map((b) => String.fromCharCode(b))
            .join('')
          )
        ),
      )
  }
  
}



/*
Classe TypeScript responsável pela chamada ao microsserviço Spring Boot que lista os pdf de processos
autor Charles Curi
*/
