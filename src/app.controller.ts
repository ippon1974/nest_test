import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      name: 'Uchechukwu Azubuko',
      country: 'Nigeria 788',
      city: 'Belgorod',
      email: 'box@wcut.ru',
      phone: "+ 7 4722 34-22-44", 
      streed: "Zhelezhyakova 15",
      code: "3080235557"
    };
  }
}
