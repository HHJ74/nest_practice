import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { BldgModule } from './bldg/bldg.module';

dotenv.config(); // .env 파일 로드
const isCloudRun = process.env.USE_CLOUDSQL_SOCKET === 'true';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: isCloudRun
        ? `/cloudsql/${process.env.CLOUDSQL_INSTANCE_CONNECTION_NAME}` // ✅ Cloud Run 환경
        : process.env.CLOUDSQL_HOST, // ✅ 로컬 & Docker 환경
      port: isCloudRun ? undefined : parseInt(process.env.CLOUDSQL_PORT || '5432'),
      username: process.env.CLOUDSQL_USER,
      password: process.env.CLOUDSQL_PASS,
      database: process.env.CLOUDSQL_DB,
      extra: isCloudRun
        ? { socketPath: `/cloudsql/${process.env.CLOUDSQL_INSTANCE_CONNECTION_NAME}` } // ✅ Cloud SQL 소켓 설정
        : {},
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, //True는 개발모드에서만
    }),
    BldgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
