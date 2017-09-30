
import { Cmp3111Component } from './cmp';
describe('Cmp3111Component', () => {
  it('should add', () => {
    expect(new Cmp3111Component().add3111(1)).toBe(3112);
  });
});