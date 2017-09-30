
import { Cmp5380Component } from './cmp';
describe('Cmp5380Component', () => {
  it('should add', () => {
    expect(new Cmp5380Component().add5380(1)).toBe(5381);
  });
});