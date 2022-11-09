import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myUrl: string;
  private myapiUrl: string;

  constructor(private httpClient: HttpClient) { 
    this.myUrl = environment.endpoint;
    this.myapiUrl = 'api/productos/'
  }


  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.myUrl}${this.myapiUrl}`);
  }

  deleteProduct(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.myUrl}${this.myapiUrl}${id}`)
  }

  saveProduct(product: Product): Observable<void> {
    return this.httpClient.post<void>(`${this.myUrl}${this.myapiUrl}`, product)
  }
  

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.myUrl}${this.myapiUrl}${id}`)
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.httpClient.put<void>(`${this.myUrl}${this.myapiUrl}${id}`, product)
  }

}
