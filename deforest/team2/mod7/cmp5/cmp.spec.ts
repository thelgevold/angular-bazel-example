
import { Cmp3275Component } from './cmp';
describe('Cmp3275Component', () => {
  it('should add', () => {
    expect(new Cmp3275Component().add3275(1)).toBe(3276);
  });
});