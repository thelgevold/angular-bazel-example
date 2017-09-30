
import { Cmp3381Component } from './cmp';
describe('Cmp3381Component', () => {
  it('should add', () => {
    expect(new Cmp3381Component().add3381(1)).toBe(3382);
  });
});