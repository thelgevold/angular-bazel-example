
import { Cmp9305Component } from './cmp';
describe('Cmp9305Component', () => {
  it('should add', () => {
    expect(new Cmp9305Component().add9305(1)).toBe(9306);
  });
});