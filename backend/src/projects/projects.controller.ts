import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Query,
} from '@nestjs/common';
import { ProjectsService } from 'src/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  list() {
    //TODO: paginar
    return this.projectsService.list();
  }

  @Patch('/:id/upvote')
  upvote(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number, // TODO: remover apos adicionar autenticacao
  ) {
    return this.projectsService.upvote({
      projectId: id,
      userId,
    });
  }

  @Patch('/:id/downvote')
  downvote(
    @Param('id', ParseIntPipe) id: number,
    @Query('userId', ParseIntPipe) userId: number, // TODO: remover apos adicionar autenticacao
  ) {
    return this.projectsService.downvote({
      projectId: id,
      userId,
    });
  }
}
