
import { Cmp8876Component } from './cmp';
describe('Cmp8876Component', () => {
  it('should add', () => {
    expect(new Cmp8876Component().add8876(1)).toBe(8877);
  });
});