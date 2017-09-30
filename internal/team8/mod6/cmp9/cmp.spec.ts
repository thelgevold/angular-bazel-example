
import { Cmp8869Component } from './cmp';
describe('Cmp8869Component', () => {
  it('should add', () => {
    expect(new Cmp8869Component().add8869(1)).toBe(8870);
  });
});