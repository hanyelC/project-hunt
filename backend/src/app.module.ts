import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AppController } from './app.controller';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';

@Module({
  imports: [],
  controllers: [AppController, ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class AppModule {}
