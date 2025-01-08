'use client';

import { UpvoteButton } from '@/components/upvote-button';

// TODO: remove that mock
const USER_ID = 1;

type ProjectCardActionsProps = {
  upvoteCount: number;
  id: number;
  upvoted: boolean;
};

export const ProjectCardActions: React.FC<ProjectCardActionsProps> = (
  props
) => {
  const upvote = async (id: number) => {
    await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/projects/${id}/upvote?userId=${USER_ID}`,
      {
        method: 'PATCH',
      }
    );
  };

  const downvote = async (id: number) => {
    await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `/projects/${id}/downvote?userId=${USER_ID}`,
      {
        method: 'PATCH',
      }
    );
  };

  const handleClick = () =>
    props.upvoted ? downvote(props.id) : upvote(props.id);

  return (
    <div>
      <UpvoteButton upvoteCount={props.upvoteCount} onClick={handleClick} />
    </div>
  );
};
ProjectCardActions.displayName = 'ProjectCardActions';
