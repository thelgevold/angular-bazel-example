
import { Cmp8639Component } from './cmp';
describe('Cmp8639Component', () => {
  it('should add', () => {
    expect(new Cmp8639Component().add8639(1)).toBe(8640);
  });
});