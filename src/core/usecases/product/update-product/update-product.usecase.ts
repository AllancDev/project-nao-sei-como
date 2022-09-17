import "reflect-metadata";
import { inject, injectable } from "inversify";
import TYPES from "../../../../types";

import { ProductRepositoryInterface } from "../../../providers/data/product-repository.interface";
import {
  UpdateProductInterface,
  UpdateProductUseCaseParams,
} from "./update-product.interface";
import { ProductEntity } from "../../../entity/Product.entity";
import { v4 as uuid } from "uuid";

@injectable()
export class UpdateProductUseCase implements UpdateProductInterface {
  private _productRepository: ProductRepositoryInterface;

  constructor(
    @inject(TYPES.ProductRepositoryInterface)
    productRepository: ProductRepositoryInterface
  ) {
    // super();
    this._productRepository = productRepository;
  }

  execute(model: UpdateProductUseCaseParams): ProductEntity {
    
    const result = this._productRepository.update({
      id: model.id,
      name: model.name,
      price: model.price,
      activated: model.activated,
      createdAt: model.createdAt,
    });

    return result;
  }
}
