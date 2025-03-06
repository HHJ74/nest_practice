import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bldg } from './blbg.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BldgService {
    constructor(
        @InjectRepository(Bldg)
        private bldgReopsitory: Repository<Bldg>
    ){}

    async findAll():Promise<Bldg[]> {
        return this.bldgReopsitory.find();
    }
}
