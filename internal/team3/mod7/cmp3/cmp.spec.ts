
import { Cmp8373Component } from './cmp';
describe('Cmp8373Component', () => {
  it('should add', () => {
    expect(new Cmp8373Component().add8373(1)).toBe(8374);
  });
});