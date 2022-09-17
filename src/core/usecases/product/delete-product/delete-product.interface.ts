import { ProductEntity } from "../../../entity/Product.entity";


export class DeleteProductUseCaseParams {
    id: string
}



export interface DeleteProductInterface {
    
    execute(model: DeleteProductUseCaseParams): ProductEntity;

}