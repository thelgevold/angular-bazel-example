
import { Cmp8410Component } from './cmp';
describe('Cmp8410Component', () => {
  it('should add', () => {
    expect(new Cmp8410Component().add8410(1)).toBe(8411);
  });
});