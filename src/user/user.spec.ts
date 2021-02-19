import { User } from './user.entitie';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
