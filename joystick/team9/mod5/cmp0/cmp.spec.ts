
import { Cmp9950Component } from './cmp';
describe('Cmp9950Component', () => {
  it('should add', () => {
    expect(new Cmp9950Component().add9950(1)).toBe(9951);
  });
});