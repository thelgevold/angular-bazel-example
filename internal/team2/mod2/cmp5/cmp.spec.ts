
import { Cmp8225Component } from './cmp';
describe('Cmp8225Component', () => {
  it('should add', () => {
    expect(new Cmp8225Component().add8225(1)).toBe(8226);
  });
});