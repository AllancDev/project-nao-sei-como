import { ProductRepositoryInterface, ProductRespositoryCreateParams, ProductRespositorySearchParams, ProductRespositoryUpdateParams } from "../../core/providers/data/product-repository.interface";
import { injectable } from "inversify";
import { ProductEntity } from "../../core/entity/Product.entity";
import { v4 as uuid } from 'uuid';
const data: ProductEntity[] = [];

@injectable()
export class ProductRepository implements ProductRepositoryInterface {

    list() {
        return data;
    }

    create(model: ProductRespositoryCreateParams): ProductEntity {

        //todo: construir o id
        const id = uuid();

        //todo: construir data model 
        const dataModel = {
            id,
            name: model.name,
            price: model.price,
            activated: model.activated,
            createdAt: model.createdAt
        }


        //todo: persistir na base de dados
        data.push(dataModel);

        return ProductEntity.build(
          dataModel.id,
          dataModel.name,
          dataModel.price,
          dataModel.activated,
          dataModel.createdAt
        );
    }

    update(model: ProductRespositoryUpdateParams): ProductEntity {
        const id = model.id;
        const indexArray = data.findIndex(product => product.id === id)

        if (indexArray == null) throw new Error("");
        
        data[indexArray] = model;

        return model;
    }


    delete(id: string): void {
        const index = data.findIndex(product => product.id === id);

        if ( index > -1 ) {
            data.splice(index, 1);
        } else {
            throw new Error("id is missing")
        }
    }

}