import { IsNotEmpty, IsNumber, IsString, IsBoolean } from "class-validator";

export namespace UpdateProductDto {

    export class Params {
        @IsString()
        id: string;
    }

    export class Body {
        @IsString()
        @IsNotEmpty()
        name: string;
    
        @IsNumber()
        @IsNotEmpty()
        price: number;
    
        @IsString()
        @IsNotEmpty()
        createdAt: string;
    
        @IsBoolean()
        @IsNotEmpty()
        activated: boolean;
      }

}

