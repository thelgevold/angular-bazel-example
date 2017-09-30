
import { Cmp8021Component } from './cmp';
describe('Cmp8021Component', () => {
  it('should add', () => {
    expect(new Cmp8021Component().add8021(1)).toBe(8022);
  });
});