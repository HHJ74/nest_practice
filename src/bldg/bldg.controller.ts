import { Controller, Get } from '@nestjs/common';
import { BldgService } from './bldg.service';
import { Bldg } from './blbg.entity';

@Controller('bldg')
export class BldgController {
    constructor(private BldgService: BldgService) {}

    @Get()
    async findAll(): Promise<Bldg[]>{
        return this.BldgService.findAll();
    }
}
