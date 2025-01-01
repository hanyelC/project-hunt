import { TriangleRounded } from '@/components/icons/triangle-rounded';
import React from 'react';

type UpvoteButtonProps = React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { upvoteCount: number }
>;

export const UpvoteButton: UpvoteButtonProps = ({ upvoteCount, ...rest }) => {
  return (
    <button
      className="bg-white flex flex-col border-2 border-solid border-gray-200 hover:border-orange-400 rounded-md size-14 justify-center items-center"
      {...rest}
    >
      <TriangleRounded />
      {upvoteCount}
    </button>
  );
};
UpvoteButton.displayName = 'UpvoteButton';
