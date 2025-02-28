import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '정혜현 테스트 페이지 입니다';
  }
}
