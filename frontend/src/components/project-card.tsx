import { AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react';

export const ProjectCard: React.FC = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader className="">
        <Avatar className="rounded-lg overflow-hidden size-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>OI</AvatarFallback>
        </Avatar>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
    </Card>
  );
};
ProjectCard.displayName = 'ProjectCard';
