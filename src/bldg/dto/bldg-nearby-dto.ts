import { IsNumber } from "class-validator";

export class BldgNeaybyDto{
    @IsNumber()
    x: number;

    @IsNumber()
    y: number;

    @IsNumber()
    radius: number;
}