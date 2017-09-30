
import { Cmp9920Component } from './cmp';
describe('Cmp9920Component', () => {
  it('should add', () => {
    expect(new Cmp9920Component().add9920(1)).toBe(9921);
  });
});