
import { Cmp8749Component } from './cmp';
describe('Cmp8749Component', () => {
  it('should add', () => {
    expect(new Cmp8749Component().add8749(1)).toBe(8750);
  });
});