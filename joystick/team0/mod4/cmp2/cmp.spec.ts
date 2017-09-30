
import { Cmp9042Component } from './cmp';
describe('Cmp9042Component', () => {
  it('should add', () => {
    expect(new Cmp9042Component().add9042(1)).toBe(9043);
  });
});