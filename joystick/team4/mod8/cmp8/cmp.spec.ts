
import { Cmp9488Component } from './cmp';
describe('Cmp9488Component', () => {
  it('should add', () => {
    expect(new Cmp9488Component().add9488(1)).toBe(9489);
  });
});