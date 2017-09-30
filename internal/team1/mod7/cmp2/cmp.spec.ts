
import { Cmp8172Component } from './cmp';
describe('Cmp8172Component', () => {
  it('should add', () => {
    expect(new Cmp8172Component().add8172(1)).toBe(8173);
  });
});