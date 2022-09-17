import { IsString} from "class-validator";


export namespace DeleteProductDto {

    export class Params {
        @IsString()
        id: string;
    }
}