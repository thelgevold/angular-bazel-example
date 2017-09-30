
import { Cmp9121Component } from './cmp';
describe('Cmp9121Component', () => {
  it('should add', () => {
    expect(new Cmp9121Component().add9121(1)).toBe(9122);
  });
});