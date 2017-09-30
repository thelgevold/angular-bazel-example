
import { Cmp8713Component } from './cmp';
describe('Cmp8713Component', () => {
  it('should add', () => {
    expect(new Cmp8713Component().add8713(1)).toBe(8714);
  });
});