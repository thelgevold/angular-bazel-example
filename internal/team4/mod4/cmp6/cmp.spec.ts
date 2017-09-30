
import { Cmp8446Component } from './cmp';
describe('Cmp8446Component', () => {
  it('should add', () => {
    expect(new Cmp8446Component().add8446(1)).toBe(8447);
  });
});