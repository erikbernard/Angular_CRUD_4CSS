import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Product } from '../product.model';

@Component({
	selector: 'app-product-delete',
	templateUrl: './product-delete.component.html',
	styleUrls: ['./product-delete.component.css'],
})
export class ProductDeleteComponent implements OnInit {
	product!: Product;

	constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.productService.getById(id as string).subscribe(product => {
			this.product = product;
		});
	}

	deleteProduct(): void {
		this.productService.delete(this.product.id as number).subscribe(() => {
			this.productService.showMessage('Produto excluído');
		});
		this.router.navigate(['/products']);
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}
}
