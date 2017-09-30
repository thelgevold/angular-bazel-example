
import { Cmp8006Component } from './cmp';
describe('Cmp8006Component', () => {
  it('should add', () => {
    expect(new Cmp8006Component().add8006(1)).toBe(8007);
  });
});