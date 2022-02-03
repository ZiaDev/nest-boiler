import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({description:'Hello World'})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
