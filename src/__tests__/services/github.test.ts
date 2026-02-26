import axios from 'axios';

// Mock axios before importing the service
jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
  })),
}));

describe('GitHub API Service', () => {
  it('should configure axios with GitHub API URL', () => {
    // Import after mock is set up
    require('@/services/github');

    expect(axios.create).toHaveBeenCalledWith(
      expect.objectContaining({
        baseURL: expect.stringContaining('api.github.com/users/vilsonneto/repos'),
      })
    );
  });

  it('should configure timeout', () => {
    expect(axios.create).toHaveBeenCalledWith(
      expect.objectContaining({
        timeout: 5000,
      })
    );
  });

  it('should sort repos by creation date descending', () => {
    const call = (axios.create as jest.Mock).mock.calls[0][0];
    expect(call.baseURL).toContain('sort=created');
    expect(call.baseURL).toContain('direction=desc');
  });
});
