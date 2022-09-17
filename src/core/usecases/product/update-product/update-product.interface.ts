import { ProductEntity } from "../../../entity/Product.entity";


export class UpdateProductUseCaseParams {
    id: string;
    name: string;
    price: number;
    activated: boolean;
    createdAt: string;
}



export interface UpdateProductInterface {
    
    execute(model: UpdateProductUseCaseParams): ProductEntity;

}