import { ProductEntity } from "../../../entity/Product.entity";


export class CreateProductUseCaseParams {
    id: string;
    name: string;
    price: number;
    activated: boolean;
    createdAt: string;
}



export interface CreateProductInterface {
    
    execute(model: CreateProductUseCaseParams): ProductEntity;

}