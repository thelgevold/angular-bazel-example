
import { Cmp9145Component } from './cmp';
describe('Cmp9145Component', () => {
  it('should add', () => {
    expect(new Cmp9145Component().add9145(1)).toBe(9146);
  });
});