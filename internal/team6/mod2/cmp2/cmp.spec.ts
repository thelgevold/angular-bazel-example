
import { Cmp8622Component } from './cmp';
describe('Cmp8622Component', () => {
  it('should add', () => {
    expect(new Cmp8622Component().add8622(1)).toBe(8623);
  });
});