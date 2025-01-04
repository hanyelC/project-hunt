import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from 'src/projects/projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  list() {
    //TODO: paginar
    return this.projectsService.list();
  }
}
