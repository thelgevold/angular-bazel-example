
import { Cmp8907Component } from './cmp';
describe('Cmp8907Component', () => {
  it('should add', () => {
    expect(new Cmp8907Component().add8907(1)).toBe(8908);
  });
});