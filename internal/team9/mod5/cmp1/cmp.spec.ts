
import { Cmp8951Component } from './cmp';
describe('Cmp8951Component', () => {
  it('should add', () => {
    expect(new Cmp8951Component().add8951(1)).toBe(8952);
  });
});