
import { Cmp9760Component } from './cmp';
describe('Cmp9760Component', () => {
  it('should add', () => {
    expect(new Cmp9760Component().add9760(1)).toBe(9761);
  });
});