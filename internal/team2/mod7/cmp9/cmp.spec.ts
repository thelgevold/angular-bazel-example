
import { Cmp8279Component } from './cmp';
describe('Cmp8279Component', () => {
  it('should add', () => {
    expect(new Cmp8279Component().add8279(1)).toBe(8280);
  });
});