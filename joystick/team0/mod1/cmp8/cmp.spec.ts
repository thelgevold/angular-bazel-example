
import { Cmp9018Component } from './cmp';
describe('Cmp9018Component', () => {
  it('should add', () => {
    expect(new Cmp9018Component().add9018(1)).toBe(9019);
  });
});