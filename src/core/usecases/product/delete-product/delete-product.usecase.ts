import "reflect-metadata";
import { inject, injectable } from "inversify";
import TYPES from "../../../../types";

import { ProductRepositoryInterface } from "../../../providers/data/product-repository.interface";
import {
  DeleteProductInterface,
  DeleteProductUseCaseParams,
} from "./delete-product.interface";
import { ProductEntity } from "../../../entity/Product.entity";
import { v4 as uuid } from "uuid";

@injectable()
export class DeleteProductUseCase implements DeleteProductInterface {
  private _productRepository: ProductRepositoryInterface;

  constructor(
    @inject(TYPES.ProductRepositoryInterface)
    productRepository: ProductRepositoryInterface
  ) {
    // super();
    this._productRepository = productRepository;
  }

  execute(model: DeleteProductUseCaseParams): ProductEntity {
    this._productRepository.delete(model.id);

    return null;
  }
}
