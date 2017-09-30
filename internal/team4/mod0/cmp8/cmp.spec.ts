
import { Cmp8408Component } from './cmp';
describe('Cmp8408Component', () => {
  it('should add', () => {
    expect(new Cmp8408Component().add8408(1)).toBe(8409);
  });
});