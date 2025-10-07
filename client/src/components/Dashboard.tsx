import React, { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div>
      <h2>SaaS Dashboard</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.title} - {p.status}</li>
        ))}
      </ul>
    </div>
  );
};