import { Component, OnInit } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})
export class ListaProductosPage implements OnInit {
  listProducts: Product[] = [];

  constructor(private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit() {
   this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
    })
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() =>{
      this.getProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado')
    })
  }

}
