
import { Cmp8363Component } from './cmp';
describe('Cmp8363Component', () => {
  it('should add', () => {
    expect(new Cmp8363Component().add8363(1)).toBe(8364);
  });
});