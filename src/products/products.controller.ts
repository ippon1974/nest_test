import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

  constructor(private readonly productsService:ProductsService){

  }

  // @Get()
  // getAll(){
  //   return {
  //     id: 1,
  //     name: 'Senao 458 R Ultra',
  //     country: 'Russia',
  //     city: 'Moscow',
  //     email: 'info@radiotel.info',
  //     prise: 888,
  //     delivery: true
  //   };
  // }

  @Get()
  getAll(){
    return this.productsService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id:string){
      return this.productsService.getById(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto:CreateProductDto){
    return this.productsService.create(createProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id:string){
      return "Remove:" + id
  }

  @Put(':id')
  update(@Body() updateProductDto:UpdateProductDto, @Param('id') id:string){
    return "Update " + id
  }



}
