import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { HeaderService } from '../../template/header/header.service';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
	product: Product = {
		name: '',
		price: null,
	};

	constructor(
		private headerService: HeaderService,
		private productService: ProductService,
		private router: Router
	) {
		headerService.headerData = {
			title: 'Novo produto',
			icon: 'add',
			routeUrl: '/products',
		};
	}

	ngOnInit() {}

	createProduct(): void {
		this.productService.create(this.product).subscribe(() => {
			this.productService.showMessage('Produto Cadastrado com Sucesso!');
			this.router.navigate(['/products']);
		});
	}

	cancel(): void {
		this.router.navigate(['/products']);
	}
}
