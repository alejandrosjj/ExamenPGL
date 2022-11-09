import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService} from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage  {

  formGroup: FormGroup;
  id: number;
  operacion: string = 'Agregar '

  constructor(public formBuilder: FormBuilder, private productService: ProductService, 
    private toastr: ToastrService, private router: Router,
    private aRouter: ActivatedRoute) { 

    this.formGroup = formBuilder.group({
      nameNameControl: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(30),
          Validators.pattern("[0-9a-z-A-Z-_ ]*"),
          Validators.required
        ])
      ],
      descriptionControl: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(70),
          Validators.pattern("[0-9a-z-A-Z-_ ]*"),
          Validators.required
        ])
      ],
      priceControl: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],

      stockControl: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });

    this.id = Number(aRouter.snapshot.paramMap.get('id'))
      
  }

  ngOnInit(): void {

    if(this.id !=0){
      // Operacion sería editar.
      this.operacion = 'Editar '
      this.getProduct(this.id);
    }
  }


  agregarProducto() {
  //  console.log(this.formGroup.value.nameNameControl)
  //  console.log(this.formGroup.get('name')?.value)


    const product: Product = {
      name: this.formGroup.value.nameNameControl,
      description: this.formGroup.value.descriptionControl,
      price: this.formGroup.value.priceControl,
      stock: this.formGroup.value.stockControl
    }

    if(this.id !=0){
      //Es editar
      product.id = this.id;
      this.productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.success('Producto actualizado correctamente')
        this.router.navigate(['/tab-inicial/lista-productos'])
        
      })
      
    } else {
      //Es agregar

      this.productService.saveProduct(product).subscribe(() => {
        console.log('Producto agregado')
        this.toastr.success('Producto agregado correctamente')
        this.router.navigate(['/tab-inicial/lista-productos'])
      })
    }

   
     

  }


  getProduct(id: number){
    this.productService.getProduct(id).subscribe((data:Product) =>{
      console.log(data)

      this.formGroup.setValue({
        nameNameControl: data.name,
        descriptionControl: data.description,
        priceControl: data.price,
        stockControl: data.stock
      })


    })
  }


  


 


}
