
import { Cmp1985Component } from './cmp';
describe('Cmp1985Component', () => {
  it('should add', () => {
    expect(new Cmp1985Component().add1985(1)).toBe(1986);
  });
});