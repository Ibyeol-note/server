import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from '../domain/note.entity';

@Injectable()
export class NoteRepository {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  async create(note: Note): Promise<Note> {
    return this.noteRepository.save(note);
  }

  async findById(id: number): Promise<Note> {
    return this.noteRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async update(id: number, note: Partial<Note>): Promise<void> {
    await this.noteRepository.update(id, note);
  }

  async delete(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }
}
