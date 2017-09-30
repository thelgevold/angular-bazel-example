
import { Cmp3339Component } from './cmp';
describe('Cmp3339Component', () => {
  it('should add', () => {
    expect(new Cmp3339Component().add3339(1)).toBe(3340);
  });
});