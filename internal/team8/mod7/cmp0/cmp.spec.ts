
import { Cmp8870Component } from './cmp';
describe('Cmp8870Component', () => {
  it('should add', () => {
    expect(new Cmp8870Component().add8870(1)).toBe(8871);
  });
});