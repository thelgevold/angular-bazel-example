
import { Cmp8205Component } from './cmp';
describe('Cmp8205Component', () => {
  it('should add', () => {
    expect(new Cmp8205Component().add8205(1)).toBe(8206);
  });
});