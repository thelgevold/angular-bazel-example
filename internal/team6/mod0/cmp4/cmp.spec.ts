
import { Cmp8604Component } from './cmp';
describe('Cmp8604Component', () => {
  it('should add', () => {
    expect(new Cmp8604Component().add8604(1)).toBe(8605);
  });
});