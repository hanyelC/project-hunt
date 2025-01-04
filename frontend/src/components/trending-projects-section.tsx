import { ProjectCard } from '@/components/project-card';

type Category = {
  id: number;
  name: string;
};

type Project = {
  id: number;
  avatarUrl: string;
  description: string;
  name: string;
  upvoteCount: number;
  categories: Category[];
};

export const TrendingProjectsSection: React.FC = async () => {
  const data = await fetch('http://localhost:3001/projects');
  const projects: Project[] = await data.json();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-3 ml-3">The next great App 👇</h1>
      <div>
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            avatarUrl={p.avatarUrl}
            categories={p.categories.map((c) => c.name)}
            description={p.description}
            name={p.name}
            upvoteCount={p.upvoteCount}
          />
        ))}
      </div>
    </section>
  );
};
TrendingProjectsSection.displayName = 'TrendingProjectsSection';
