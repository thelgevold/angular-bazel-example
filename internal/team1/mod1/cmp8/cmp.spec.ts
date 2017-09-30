
import { Cmp8118Component } from './cmp';
describe('Cmp8118Component', () => {
  it('should add', () => {
    expect(new Cmp8118Component().add8118(1)).toBe(8119);
  });
});