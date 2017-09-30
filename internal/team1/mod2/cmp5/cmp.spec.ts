
import { Cmp8125Component } from './cmp';
describe('Cmp8125Component', () => {
  it('should add', () => {
    expect(new Cmp8125Component().add8125(1)).toBe(8126);
  });
});