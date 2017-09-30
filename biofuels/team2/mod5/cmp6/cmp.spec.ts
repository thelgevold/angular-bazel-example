
import { Cmp1256Component } from './cmp';
describe('Cmp1256Component', () => {
  it('should add', () => {
    expect(new Cmp1256Component().add1256(1)).toBe(1257);
  });
});