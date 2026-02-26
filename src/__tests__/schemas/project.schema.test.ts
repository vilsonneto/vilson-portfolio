import { projectSchema, projectData } from '@/schemas/project.schema';

describe('projectSchema', () => {
  const validProject = {
    id: 1,
    title: 'VersoChat',
    description: 'Real-time chat application',
    resume: 'A comprehensive chat solution',
    stack: ['Next.js', 'TypeScript', 'Redux'],
    image: '/images/versochat.png',
    deploy: 'https://versochat.com',
    github: 'https://github.com/user/versochat',
    context: 'Built for enterprise communication',
    role: ['Frontend Developer', 'State Management'],
    technologies: [
      {
        name: 'Redux Toolkit',
        reason: 'Complex state management with WebSocket',
      },
    ],
    results: ['95% test coverage', '50% performance improvement'],
  };

  it('should validate a complete valid project', () => {
    const result = projectSchema.safeParse(validProject);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual(validProject);
    }
  });

  it('should reject project without required fields', () => {
    const invalidProject = {
      id: 1,
      title: 'Test Project',
      // missing other required fields
    };

    const result = projectSchema.safeParse(invalidProject);
    expect(result.success).toBe(false);
  });

  it('should validate id as number', () => {
    const projectWithStringId = {
      ...validProject,
      id: '1', // string instead of number
    };

    const result = projectSchema.safeParse(projectWithStringId);
    expect(result.success).toBe(false);
  });

  it('should validate title as string', () => {
    const projectWithNumberTitle = {
      ...validProject,
      title: 123,
    };

    const result = projectSchema.safeParse(projectWithNumberTitle);
    expect(result.success).toBe(false);
  });

  it('should validate stack as array of strings', () => {
    const projectWithInvalidStack = {
      ...validProject,
      stack: ['React', 123, 'TypeScript'], // contains number
    };

    const result = projectSchema.safeParse(projectWithInvalidStack);
    expect(result.success).toBe(false);
  });

  it('should validate role as array of strings', () => {
    const projectWithInvalidRole = {
      ...validProject,
      role: 'Developer', // string instead of array
    };

    const result = projectSchema.safeParse(projectWithInvalidRole);
    expect(result.success).toBe(false);
  });

  it('should validate technologies array structure', () => {
    const projectWithInvalidTechnologies = {
      ...validProject,
      technologies: [
        {
          name: 'Redux',
          // missing reason field
        },
      ],
    };

    const result = projectSchema.safeParse(projectWithInvalidTechnologies);
    expect(result.success).toBe(false);
  });

  it('should validate technologies with both name and reason', () => {
    const projectWithValidTechnologies = {
      ...validProject,
      technologies: [
        {
          name: 'Next.js',
          reason: 'SSR and performance',
        },
        {
          name: 'TypeScript',
          reason: 'Type safety',
        },
      ],
    };

    const result = projectSchema.safeParse(projectWithValidTechnologies);
    expect(result.success).toBe(true);
  });

  it('should validate results as array of strings', () => {
    const projectWithInvalidResults = {
      ...validProject,
      results: [
        '95% coverage',
        { metric: 'performance' }, // object instead of string
      ],
    };

    const result = projectSchema.safeParse(projectWithInvalidResults);
    expect(result.success).toBe(false);
  });

  it('should validate empty arrays', () => {
    const projectWithEmptyArrays = {
      ...validProject,
      stack: [],
      role: [],
      technologies: [],
      results: [],
    };

    const result = projectSchema.safeParse(projectWithEmptyArrays);
    expect(result.success).toBe(true);
  });

  it('should validate all string URLs', () => {
    const projectWithValidUrls = {
      ...validProject,
      deploy: 'https://example.com',
      github: 'https://github.com/user/repo',
      image: '/images/project.png',
    };

    const result = projectSchema.safeParse(projectWithValidUrls);
    expect(result.success).toBe(true);
  });

  it('should provide proper TypeScript types', () => {
    // This is a compile-time test
    const project: projectData = validProject;

    expect(project.id).toBe(1);
    expect(project.title).toBe('VersoChat');
    expect(Array.isArray(project.stack)).toBe(true);
    expect(Array.isArray(project.technologies)).toBe(true);
  });
});
