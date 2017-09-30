
import { Cmp8415Component } from './cmp';
describe('Cmp8415Component', () => {
  it('should add', () => {
    expect(new Cmp8415Component().add8415(1)).toBe(8416);
  });
});