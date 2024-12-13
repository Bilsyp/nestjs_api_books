import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getAllCats() {
    return ['Cat1', 'Cat2', 'Cat3']; // Simulasi data
  }
}
