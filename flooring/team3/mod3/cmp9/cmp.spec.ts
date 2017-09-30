
import { Cmp5339Component } from './cmp';
describe('Cmp5339Component', () => {
  it('should add', () => {
    expect(new Cmp5339Component().add5339(1)).toBe(5340);
  });
});