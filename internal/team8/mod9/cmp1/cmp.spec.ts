
import { Cmp8891Component } from './cmp';
describe('Cmp8891Component', () => {
  it('should add', () => {
    expect(new Cmp8891Component().add8891(1)).toBe(8892);
  });
});