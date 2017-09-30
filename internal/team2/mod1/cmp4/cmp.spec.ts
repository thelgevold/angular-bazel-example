
import { Cmp8214Component } from './cmp';
describe('Cmp8214Component', () => {
  it('should add', () => {
    expect(new Cmp8214Component().add8214(1)).toBe(8215);
  });
});