import { inject } from "inversify";
import {
  httpGet,
  BaseHttpController,
  interfaces,
  controller,
  queryParam,
  requestParam,
  httpPost,
  requestBody,
  httpPut,
  httpDelete,
} from "inversify-express-utils";

import { ListProductInterface } from "../../core/usecases/product/list-product/list-product.interface";
import TYPES from "../../types";

import { CreateProductInterface } from "../../core/usecases/product/create-product/create-product.interface";
import { ValidateDtoMiddleware } from "../middlewares/validate-dto-middleware";
import { CreateProductDto } from "../dtos/product-create.dto";

import { v4 as uuid } from "uuid";
import { UpdateProductDto } from "../dtos/product-update.dto";
import { UpdateProductInterface } from "../../core/usecases/product/update-product/update-product.interface";
import { DeleteProductDto } from "../../presentation/dtos/product-delete.dto";
import { DeleteProductInterface } from "../../core/usecases/product/delete-product/delete-product.interface";

@controller("/products")
export class ProductController
  extends BaseHttpController
  implements interfaces.Controller
{
  private _listProductService: ListProductInterface;
  private _createProductService: CreateProductInterface;
  private _updateProductService: UpdateProductInterface;
  private _deleteProductService: DeleteProductInterface;

  constructor(
    @inject(TYPES.ListProductInterface)
    listProductUseCase: ListProductInterface,
    @inject(TYPES.CreateProductInterface)
    createProductUseCase: CreateProductInterface,
    @inject(TYPES.UpdateProductInterface)
    updateProductUseCase: UpdateProductInterface,
    @inject(TYPES.DeleteProductInterface)
    deleteProductUseCase: DeleteProductInterface
  ) {
    super();
    this._createProductService = createProductUseCase;
    this._listProductService = listProductUseCase;
    this._updateProductService = updateProductUseCase;
    this._deleteProductService = deleteProductUseCase;
  }

  @httpGet("/")
  public async list(): Promise<interfaces.IHttpActionResult> {
    const result: any[] = await this._listProductService.execute({});

    return this.json(result);
  }

  @httpPost("/", ValidateDtoMiddleware(CreateProductDto.Body, "body"))
  public async create(
    @requestBody() body: CreateProductDto.Body
  ): Promise<interfaces.IHttpActionResult> {
    const id = uuid();

    const result = await this._createProductService.execute({
      id,
      name: body.name,
      price: body.price,
      activated: body.activated,
      createdAt: body.createdAt,
    });

    return this.json(result);
  }

  @httpPut(
    "/:id",
    ValidateDtoMiddleware(UpdateProductDto.Params, "params"),
    ValidateDtoMiddleware(UpdateProductDto.Body, "body")
  )
  public async update(
    @requestParam("id") params: string,
    @requestBody() body: UpdateProductDto.Body
  ): Promise<interfaces.IHttpActionResult> {

    const result = await this._updateProductService.execute({
      id: params,
      name: body.name,
      price: body.price,
      activated: body.activated,
      createdAt: body.createdAt,
    });

    return this.json({
      mensagem: "sucesso",
      data: result,
    });
  }

  @httpDelete('/:id', ValidateDtoMiddleware(DeleteProductDto.Params, "params"))
  public async delete(  @requestParam("id") params: string): Promise<interfaces.IHttpActionResult> {
    await this._deleteProductService.execute({id: params})

    return this.json({ message: "Deletado com sucesso."})

  }
}
