
import { Cmp9832Component } from './cmp';
describe('Cmp9832Component', () => {
  it('should add', () => {
    expect(new Cmp9832Component().add9832(1)).toBe(9833);
  });
});