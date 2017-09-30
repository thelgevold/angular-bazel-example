
import { Cmp8558Component } from './cmp';
describe('Cmp8558Component', () => {
  it('should add', () => {
    expect(new Cmp8558Component().add8558(1)).toBe(8559);
  });
});