
import { Cmp8180Component } from './cmp';
describe('Cmp8180Component', () => {
  it('should add', () => {
    expect(new Cmp8180Component().add8180(1)).toBe(8181);
  });
});