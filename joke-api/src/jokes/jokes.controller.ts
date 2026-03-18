import { Controller, Post, Get, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';
import { GetJokesByEmailDto } from './dto/get-jokes-by-email.dto';


@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) { }

  // POST /jokes/submit
  @Post('submit')
  create(@Body() dto: CreateJokeDto) {
    return this.jokesService.create(dto);
  }

  // GET /jokes/email?email=test@mail.com
  @Get('email')
  findByEmail(@Query() query: GetJokesByEmailDto) {
    return this.jokesService.findByEmail(query.email);
  }

  // GET /jokes/random
  @Get('random')
  getRandom() {
    return this.jokesService.getRandom();
  }

  // PUT /jokes/:id
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateJokeDto) {
    return this.jokesService.update(id, dto);
  }
  // DELETE /jokes/:id
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.jokesService.delete(id);
  }
}