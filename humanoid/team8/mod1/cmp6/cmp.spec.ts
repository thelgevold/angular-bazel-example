
import { Cmp7816Component } from './cmp';
describe('Cmp7816Component', () => {
  it('should add', () => {
    expect(new Cmp7816Component().add7816(1)).toBe(7817);
  });
});