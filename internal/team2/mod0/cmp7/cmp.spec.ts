
import { Cmp8207Component } from './cmp';
describe('Cmp8207Component', () => {
  it('should add', () => {
    expect(new Cmp8207Component().add8207(1)).toBe(8208);
  });
});