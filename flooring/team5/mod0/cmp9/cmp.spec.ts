
import { Cmp5509Component } from './cmp';
describe('Cmp5509Component', () => {
  it('should add', () => {
    expect(new Cmp5509Component().add5509(1)).toBe(5510);
  });
});