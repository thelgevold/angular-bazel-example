
import { Cmp8367Component } from './cmp';
describe('Cmp8367Component', () => {
  it('should add', () => {
    expect(new Cmp8367Component().add8367(1)).toBe(8368);
  });
});