import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { BukuController } from './buku/buku.controller';
import { BukuService } from './buku/buku.service';
import { BukuModule } from './buku/buku.module';

@Module({
  imports: [CatsModule, BukuModule],
  controllers: [AppController, BukuController],
  providers: [AppService, BukuService],
})
export class AppModule {}
