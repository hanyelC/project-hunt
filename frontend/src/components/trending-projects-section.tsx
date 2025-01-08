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
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + '/projects');
  const projects: Project[] = await data.json();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-3 ml-3">The next great App 👇</h1>
      <div>
        {projects.map((p) => (
          <ProjectCard
            avatarUrl={p.avatarUrl}
            categories={p.categories.map((c) => c.name)}
            description={p.description}
            id={p.id}
            key={p.id}
            name={p.name}
            upvoteCount={p.upvoteCount}
          />
        ))}
      </div>
    </section>
  );
};
TrendingProjectsSection.displayName = 'TrendingProjectsSection';
