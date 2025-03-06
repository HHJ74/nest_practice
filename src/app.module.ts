import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { BldgModule } from './bldg/bldg.module';

dotenv.config(); // .env 파일 로드

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: `/cloudsql/${process.env.CLOUDSQL_INSTANCE_CONNECTION_NAME}`,
      port: parseInt('5432'), // 기본값 설정
      username: process.env.CLOUDSQL_USER,
      password: process.env.CLOUDSQL_PASS,
      database: process.env.CLOUDSQL_DB,

      // host: process.env.DB_HOST,
      // port: parseInt(process.env.DB_PORT || '5432', 10), // 기본값 설정
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,
      extra: {
        socketPath: `/cloudsql/${process.env.CLOUDSQL_INSTANCE_CONNECTION_NAME}`, // Cloud SQL 소켓 경로
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, //True는 개발모드에서만
    }),
    BldgModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
