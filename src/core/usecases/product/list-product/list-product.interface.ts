import { ProductEntity } from "../../../entity/Product.entity";

export interface ListProductInterface {
    execute(filter: any): Promise<ProductEntity[]>
}