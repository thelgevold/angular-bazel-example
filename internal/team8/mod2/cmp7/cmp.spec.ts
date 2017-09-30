
import { Cmp8827Component } from './cmp';
describe('Cmp8827Component', () => {
  it('should add', () => {
    expect(new Cmp8827Component().add8827(1)).toBe(8828);
  });
});