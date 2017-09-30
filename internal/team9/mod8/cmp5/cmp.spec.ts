
import { Cmp8985Component } from './cmp';
describe('Cmp8985Component', () => {
  it('should add', () => {
    expect(new Cmp8985Component().add8985(1)).toBe(8986);
  });
});