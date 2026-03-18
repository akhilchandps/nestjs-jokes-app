import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { Joke } from '../jokes/joke.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Joke]) // ✅ THIS FIXES YOUR ERROR
  ],
  controllers: [JokesController],
  providers: [JokesService],
})
export class JokesModule {}