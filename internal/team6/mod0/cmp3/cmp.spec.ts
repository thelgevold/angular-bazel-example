
import { Cmp8603Component } from './cmp';
describe('Cmp8603Component', () => {
  it('should add', () => {
    expect(new Cmp8603Component().add8603(1)).toBe(8604);
  });
});