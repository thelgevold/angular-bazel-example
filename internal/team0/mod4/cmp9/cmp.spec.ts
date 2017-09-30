
import { Cmp8049Component } from './cmp';
describe('Cmp8049Component', () => {
  it('should add', () => {
    expect(new Cmp8049Component().add8049(1)).toBe(8050);
  });
});