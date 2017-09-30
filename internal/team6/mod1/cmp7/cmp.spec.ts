
import { Cmp8617Component } from './cmp';
describe('Cmp8617Component', () => {
  it('should add', () => {
    expect(new Cmp8617Component().add8617(1)).toBe(8618);
  });
});