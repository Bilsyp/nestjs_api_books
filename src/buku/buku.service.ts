import { Injectable } from '@nestjs/common';

@Injectable()
export class BukuService {
  private bukuArray = [];

  getAllBuku() {
    return this.bukuArray;
  }

  createBuku(bukuData: { title: string; author: string }) {
    const newBuku = { id: Date.now().toString(), ...bukuData };
    this.bukuArray.push(newBuku);
    return newBuku;
  }

  updateBuku(id: string, bukuData: { title: string; author: string }) {
    const bukuIndex = this.bukuArray.findIndex((buku) => buku.id === id);
    if (bukuIndex === -1) {
      return { message: 'Buku not found!' };
    }
    this.bukuArray[bukuIndex] = { id, ...bukuData };
    return this.bukuArray[bukuIndex];
  }

  deleteBuku(id: string) {
    const bukuIndex = this.bukuArray.findIndex((buku) => buku.id === id);
    if (bukuIndex === -1) {
      return { message: 'Buku not found!' };
    }
    const deletedBuku = this.bukuArray.splice(bukuIndex, 1);
    return deletedBuku[0];
  }
}
