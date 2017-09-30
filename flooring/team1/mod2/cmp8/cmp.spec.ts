
import { Cmp5128Component } from './cmp';
describe('Cmp5128Component', () => {
  it('should add', () => {
    expect(new Cmp5128Component().add5128(1)).toBe(5129);
  });
});