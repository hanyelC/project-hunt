import { AvatarFallback } from '@/components/ui/avatar';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { UpvoteButton } from '@/components/upvote-button';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react';

type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
  avatarUrl: string;
  categories: string[];
  description: string;
  name: string;
  upvoteCount: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  avatarUrl,
  categories,
  description,
  name,
  upvoteCount,
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
      <div>
        <UpvoteButton upvoteCount={upvoteCount} />
      </div>
    </div>
  );
};
ProjectCard.displayName = 'ProjectCard';
