import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BukuService } from './buku.service';

@Controller('buku')
export class BukuController {
  constructor(private readonly bukuService: BukuService) {}

  @Get()
  getAllBuku() {
    return this.bukuService.getAllBuku();
  }

  @Post()
  createBuku(@Body() bukuData: { title: string; author: string }) {
    return this.bukuService.createBuku(bukuData);
  }

  @Put(':id')
  updateBuku(
    @Param('id') id: string,
    @Body() bukuData: { title: string; author: string },
  ) {
    return this.bukuService.updateBuku(id, bukuData);
  }

  @Delete(':id')
  deleteBuku(@Param('id') id: string) {
    return this.bukuService.deleteBuku(id);
  }
}
