import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    // return "hi Vovan how are you?"
    return {
      name: 'Uchechukwu Azubuko',
      country: 'Nigeria 788',
      city: 'Belgorod',
      email: 'box@wcut.ru'
    };
  }
}
