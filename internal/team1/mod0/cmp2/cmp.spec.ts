
import { Cmp8102Component } from './cmp';
describe('Cmp8102Component', () => {
  it('should add', () => {
    expect(new Cmp8102Component().add8102(1)).toBe(8103);
  });
});