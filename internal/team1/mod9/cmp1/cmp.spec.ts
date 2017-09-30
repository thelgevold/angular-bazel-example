
import { Cmp8191Component } from './cmp';
describe('Cmp8191Component', () => {
  it('should add', () => {
    expect(new Cmp8191Component().add8191(1)).toBe(8192);
  });
});