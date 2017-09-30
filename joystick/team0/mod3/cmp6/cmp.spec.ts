
import { Cmp9036Component } from './cmp';
describe('Cmp9036Component', () => {
  it('should add', () => {
    expect(new Cmp9036Component().add9036(1)).toBe(9037);
  });
});