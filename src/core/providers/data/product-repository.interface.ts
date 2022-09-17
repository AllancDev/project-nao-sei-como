

import { ProductEntity } from "../../entity/Product.entity";


export type ProductRespositorySearchParams = {
    name?: string;    
}


export type ProductRespositoryCreateParams = {
    id: string,
    name: string,
    price: number,
    activated: boolean,
    createdAt: string   
}

export type ProductRespositoryUpdateParams = {
    id: string,
    name: string,
    price: number,
    activated: boolean,
    createdAt: string   
}

export interface ProductRepositoryInterface {
    
    list(): ProductEntity[];

    search(model: ProductRespositorySearchParams): ProductEntity[];
    
    findById(id: string): ProductEntity;

    create(model: ProductRespositoryCreateParams): ProductEntity;
    
    update(model: ProductRespositoryUpdateParams): ProductEntity;

    delete(id: string): void;

}
