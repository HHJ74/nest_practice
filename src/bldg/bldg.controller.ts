import { Controller, Get, Query } from '@nestjs/common';
import { BldgService } from './bldg.service';
import { Bldg } from './blbg.entity';
import { BldgNeaybyDto } from './dto/bldg-nearby-dto';

@Controller('bldg')
export class BldgController {
    constructor(private BldgService: BldgService) {}

    @Get()
    async findAll(): Promise<Bldg[]>{
        return this.BldgService.findAll();
    }

    @Get('nearby')
    async FindNearby(@Query() quary:BldgNeaybyDto): Promise<Bldg[]>{
        return this.BldgService.findNearby(quary.x, quary.y, quary.radius);
    }
}
