
import { Cmp8764Component } from './cmp';
describe('Cmp8764Component', () => {
  it('should add', () => {
    expect(new Cmp8764Component().add8764(1)).toBe(8765);
  });
});