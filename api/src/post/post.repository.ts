import { Repository, FindManyOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../domain/post.entity';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async create(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }

  async findById(id: number): Promise<Post> {
    return this.postRepository.findOne({ where: { id } });
  }

  async findAll(options?: FindManyOptions<Post>): Promise<[Post[], number]> {
    return this.postRepository.findAndCount(options);
  }

  async update(id: number, post: Partial<Post>): Promise<void> {
    await this.postRepository.update(id, post);
  }

  async delete(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
