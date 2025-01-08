'use server';

import { ProjectCardActions } from '@/components/project-card-actions';
import { AvatarFallback } from '@/components/ui/avatar';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react';

type ProjectCardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'id'> & {
  avatarUrl: string;
  categories: string[];
  description: string;
  name: string;
  upvoteCount: number;
  id: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = async ({
  avatarUrl,
  categories,
  description,
  name,
  upvoteCount,
  id: id,
  ...rest
}) => {
  return (
    <div
      className="flex gap-2 p-3 rounded-2xl hover:bg-gray-100 hover:cursor-pointer"
      {...rest}
    >
      <Avatar className="rounded-lg overflow-hidden size-12">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>OI</AvatarFallback>
      </Avatar>
      <div className="flex-1 gap-1 flex flex-col">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {/* categories */}
        <div className="flex gap-2">
          {categories.map((c, i) => (
            // TODO: change key for id
            <React.Fragment key={i}>
              {i > 0 && '•'}
              <span key={i}>{c}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <ProjectCardActions upvoteCount={upvoteCount} id={id} upvoted={true} />
    </div>
  );
};
ProjectCard.displayName = 'ProjectCard';
