import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/createNoteDto';
import { MyNoteResponse } from './dto/myNoteResponse';
import { UpdateNoteDto } from './dto/updateNoteDto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async createNote(
    @Body() createNoteDto: CreateNoteDto,
    @Body('userId', ParseIntPipe) userId: number,
  ): Promise<MyNoteResponse> {
    return this.noteService.createNote(createNoteDto, userId);
  }

  @Get(':id')
  async getNoteById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MyNoteResponse> {
    return this.noteService.getNoteById(id);
  }

  @Get()
  async getNotes(): Promise<MyNoteResponse[]> {
    return this.noteService.getNotes();
  }

  @Put(':id')
  async updateNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateNoteDto: UpdateNoteDto,
  ): Promise<MyNoteResponse> {
    return this.noteService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  async deleteNote(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.noteService.deleteNote(id);
  }
}
