import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	baseUrl = 'http://localhost:3001/products';

	constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

	showMessage(msg: string): void {
		this.snackBar.open(msg, 'X', {
			duration: 3000,
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product).pipe(
			map(response => response),
			catchError(e => this.errorHandler(e))
		);
	}

	errorHandler(e: any): Observable<any> {
		this.showMessage('Ocorreu um Erro!');
		return EMPTY;
	}

	get(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl);
	}

	getById(id: string): Observable<Product> {
		return this.http.get<Product>(`${this.baseUrl}/${id}`);
	}

	update(product: Product): Observable<Product> {
		return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product);
	}

	delete(id: number): Observable<Product> {
		return this.http.delete<Product>(`${this.baseUrl}/${id}`);
	}
}
