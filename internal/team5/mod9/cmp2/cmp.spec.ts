
import { Cmp8592Component } from './cmp';
describe('Cmp8592Component', () => {
  it('should add', () => {
    expect(new Cmp8592Component().add8592(1)).toBe(8593);
  });
});