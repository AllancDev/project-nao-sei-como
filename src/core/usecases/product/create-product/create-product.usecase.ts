import "reflect-metadata";
import { inject, injectable } from "inversify";
import TYPES from "../../../../types";

import { ProductRepositoryInterface } from "../../../../core/providers/data/product-repository.interface";
import {
  CreateProductInterface,
  CreateProductUseCaseParams,
} from "./create-product.interface";
import { ProductEntity } from "../../../entity/Product.entity";
import { v4 as uuid } from "uuid";

@injectable()
export class CreateProductUseCase implements CreateProductInterface {
  private _productRepository: ProductRepositoryInterface;

  constructor(
    @inject(TYPES.ProductRepositoryInterface)
    productRepository: ProductRepositoryInterface
  ) {
    // super();
    this._productRepository = productRepository;
  }

  execute(model: CreateProductUseCaseParams): ProductEntity {
    const productId = uuid(); 
    
    const result = this._productRepository.create({
      id: productId,
      name: model.name,
      price: model.price,
      activated: model.activated, 
      createdAt: model.createdAt,
    });

    return result;
  }
}
