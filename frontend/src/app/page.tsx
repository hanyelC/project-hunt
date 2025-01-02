import { Header } from '@/components/header';
import { ProjectCard } from '@/components/project-card';

export default function Home() {
  return (
    <div>
      <Header />
      <ProjectCard upvoteCount={329} />
    </div>
  );
}
