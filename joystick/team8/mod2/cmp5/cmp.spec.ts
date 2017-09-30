
import { Cmp9825Component } from './cmp';
describe('Cmp9825Component', () => {
  it('should add', () => {
    expect(new Cmp9825Component().add9825(1)).toBe(9826);
  });
});