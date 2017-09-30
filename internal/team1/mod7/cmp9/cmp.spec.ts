
import { Cmp8179Component } from './cmp';
describe('Cmp8179Component', () => {
  it('should add', () => {
    expect(new Cmp8179Component().add8179(1)).toBe(8180);
  });
});