
import { Cmp8192Component } from './cmp';
describe('Cmp8192Component', () => {
  it('should add', () => {
    expect(new Cmp8192Component().add8192(1)).toBe(8193);
  });
});