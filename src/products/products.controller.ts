import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {

  @Get()
  getAll(){
    return {
      name: 'Phone Senao 458',
      country: 'Russia',
      city: 'Moscow',
      email: 'info@radiotel.info'
    };
  }

  @Get(':id')
  getOne(@Param('id') id:string):string{
      return 'getOne '  + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto:CreateProductDto):string{
    return `Title: ${createProductDto.title} Cost: ${createProductDto.price}`
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
