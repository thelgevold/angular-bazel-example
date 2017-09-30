
import { Cmp8766Component } from './cmp';
describe('Cmp8766Component', () => {
  it('should add', () => {
    expect(new Cmp8766Component().add8766(1)).toBe(8767);
  });
});