
import { Cmp9761Component } from './cmp';
describe('Cmp9761Component', () => {
  it('should add', () => {
    expect(new Cmp9761Component().add9761(1)).toBe(9762);
  });
});