import { ProjectCard } from '@/components/project-card';

export const TrendingProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'bestinha',
      description: 'just imagine a great description here right now',
      categories: ['SaaS', 'AI', 'API'],
      upvoteCount: 10,
      avatarUrl: 'https://github.com/shadcn.png',
    },
    {
      id: 2,
      name: 'bestinha 02',
      description: 'just imagine a great description here right now',
      categories: ['SaaS', 'AI', 'API'],
      upvoteCount: 105,
      avatarUrl: 'https://github.com/shadcn.png',
    },
    {
      id: 3,
      name: 'bestinha 03',
      description: 'just imagine a great description here right now',
      categories: ['SaaS', 'AI'],
      upvoteCount: 115,
      avatarUrl: 'https://github.com/shadcn.png',
    },
  ];
  return (
    <section>
      <h1 className="text-2xl font-bold mb-3 ml-3">The next great App 👇</h1>
      <div>
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            avatarUrl={p.avatarUrl}
            categories={p.categories}
            description={p.description}
            name={p.name}
            upvoteCount={p.upvoteCount}
          ></ProjectCard>
        ))}
      </div>
    </section>
  );
};
TrendingProjectsSection.displayName = 'TrendingProjectsSection';
