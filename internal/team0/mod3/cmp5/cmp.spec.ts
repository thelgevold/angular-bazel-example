
import { Cmp8035Component } from './cmp';
describe('Cmp8035Component', () => {
  it('should add', () => {
    expect(new Cmp8035Component().add8035(1)).toBe(8036);
  });
});