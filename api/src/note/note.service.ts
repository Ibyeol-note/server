import { Injectable } from '@nestjs/common';
import { NoteRepository } from './note.repository';
import { plainToInstance } from 'class-transformer';
import { Note } from '../domain/note.entity';
import { CreateNoteDto } from './dto/createNoteDto';
import { MyNoteResponse } from './dto/myNoteResponse';
import { UpdateNoteDto } from './dto/updateNoteDto';

@Injectable()
export class NoteService {
  constructor(private readonly noteRepository: NoteRepository) {}

  async createNote(
    createNoteDto: CreateNoteDto,
    userId: number,
  ): Promise<MyNoteResponse> {
    const note = new Note();
    note.content = createNoteDto.content;
    note.userId = userId;
    const createdNote = await this.noteRepository.create(note);
    return plainToInstance(MyNoteResponse, createdNote);
  }

  async getNoteById(noteId: number): Promise<MyNoteResponse> {
    const note = await this.noteRepository.findById(noteId);
    return plainToInstance(MyNoteResponse, note);
  }

  async getNotes(): Promise<MyNoteResponse[]> {
    const notes = await this.noteRepository.findAll();
    return notes.map((note) => plainToInstance(MyNoteResponse, note));
  }

  async updateNote(
    noteId: number,
    updateNoteDto: UpdateNoteDto,
  ): Promise<MyNoteResponse> {
    await this.noteRepository.update(noteId, updateNoteDto);
    const updatedNote = await this.noteRepository.findById(noteId);
    return plainToInstance(MyNoteResponse, updatedNote);
  }

  async deleteNote(noteId: number): Promise<void> {
    await this.noteRepository.delete(noteId);
  }
}
