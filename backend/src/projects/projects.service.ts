import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.project.findMany({
      include: {
        categories: true,
      },
    });
  }

  async upvote(params: { projectId: number; userId: number }) {
    const project = await this.prisma.project.findFirst({
      where: {
        id: params.projectId,
      },
    });

    if (!project) throw new NotFoundException('Project not found');

    await this.prisma.project.update({
      where: {
        id: project.id,
      },
      data: {
        upvoteCount: {
          increment: 1,
        },
      },
    });
  }
}
