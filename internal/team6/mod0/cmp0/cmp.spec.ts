
import { Cmp8600Component } from './cmp';
describe('Cmp8600Component', () => {
  it('should add', () => {
    expect(new Cmp8600Component().add8600(1)).toBe(8601);
  });
});