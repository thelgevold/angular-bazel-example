
import { Cmp5628Component } from './cmp';
describe('Cmp5628Component', () => {
  it('should add', () => {
    expect(new Cmp5628Component().add5628(1)).toBe(5629);
  });
});