import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class InitializationService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
      console.log('aaaaaa');
  }
}

