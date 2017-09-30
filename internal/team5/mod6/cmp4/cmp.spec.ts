
import { Cmp8564Component } from './cmp';
describe('Cmp8564Component', () => {
  it('should add', () => {
    expect(new Cmp8564Component().add8564(1)).toBe(8565);
  });
});