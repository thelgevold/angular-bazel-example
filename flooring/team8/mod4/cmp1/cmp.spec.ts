
import { Cmp5841Component } from './cmp';
describe('Cmp5841Component', () => {
  it('should add', () => {
    expect(new Cmp5841Component().add5841(1)).toBe(5842);
  });
});