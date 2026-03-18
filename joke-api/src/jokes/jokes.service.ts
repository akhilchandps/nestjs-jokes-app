import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from './joke.entity';
import { CreateJokeDto } from './dto/create-joke.dto';
import { UpdateJokeDto } from './dto/update-joke.dto';


@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke)
    private jokeRepo: Repository<Joke>,
  ) { }

  // Submit joke
  async create(dto: CreateJokeDto) {
    try {
      const joke = this.jokeRepo.create(dto);
      return await this.jokeRepo.save(joke);
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to create joke');
    }
  }

  // Get jokes by email
  async findByEmail(email: string) {
    try {
      const jokes = await this.jokeRepo.find({ where: { email } });
      if (jokes.length === 0) {
        throw new NotFoundException(`No jokes found for email: ${email}`);
      }
      return jokes;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch jokes');
    }
  }

  // Get random joke
  async getRandom() {
    try {
      const jokes = await this.jokeRepo.find();
      if (!jokes.length) return null;
      return jokes[Math.floor(Math.random() * jokes.length)];
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch random joke');
    }
  }

  // Update joke
  async update(id: number, dto: UpdateJokeDto) {
    const joke = await this.jokeRepo.findOne({ where: { id } });
    if (!joke) throw new NotFoundException('Joke not found');

    if (dto.title !== undefined) {
      joke.title = dto.title;
    }
    if (dto.content !== undefined) {
      joke.content = dto.content;
    }

    return this.jokeRepo.save(joke);
  }
  // Delete joke
  async delete(id: number) {
    try {
      const result = await this.jokeRepo.delete(id);
      if (!result.affected) throw new NotFoundException('Joke not found');
      return { message: 'Deleted successfully' };
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to delete joke');
    }
  }
}