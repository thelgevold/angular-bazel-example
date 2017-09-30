
import { Cmp8563Component } from './cmp';
describe('Cmp8563Component', () => {
  it('should add', () => {
    expect(new Cmp8563Component().add8563(1)).toBe(8564);
  });
});