
import { Cmp8834Component } from './cmp';
describe('Cmp8834Component', () => {
  it('should add', () => {
    expect(new Cmp8834Component().add8834(1)).toBe(8835);
  });
});