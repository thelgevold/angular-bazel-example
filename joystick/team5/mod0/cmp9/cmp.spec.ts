
import { Cmp9509Component } from './cmp';
describe('Cmp9509Component', () => {
  it('should add', () => {
    expect(new Cmp9509Component().add9509(1)).toBe(9510);
  });
});