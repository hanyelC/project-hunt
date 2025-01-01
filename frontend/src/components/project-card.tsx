import { AvatarFallback } from '@/components/ui/avatar';
import { CardDescription, CardTitle } from '@/components/ui/card';
import { UpvoteButton } from '@/components/upvote-button';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react';

export const ProjectCard: React.FC = () => {
  return (
    <div className="flex gap-2 p-3 rounded-2xl hover:bg-gray-100">
      <Avatar className="rounded-lg overflow-hidden size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>OI</AvatarFallback>
      </Avatar>
      <div className="flex-1 gap-3 flex flex-col">
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
        {/* categories */}
        <div className="flex gap-2">
          {['saas', 'e-commerce'].map((c, i) => (
            // TODO: adicionar item separador
            <span key={i}>{c}</span>
          ))}
        </div>
      </div>
      <div>
        <UpvoteButton upvoteCount={329} />
      </div>
    </div>
  );
};
ProjectCard.displayName = 'ProjectCard';
