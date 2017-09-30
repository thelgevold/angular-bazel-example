
import { Cmp8301Component } from './cmp';
describe('Cmp8301Component', () => {
  it('should add', () => {
    expect(new Cmp8301Component().add8301(1)).toBe(8302);
  });
});