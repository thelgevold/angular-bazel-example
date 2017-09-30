
import { Cmp8224Component } from './cmp';
describe('Cmp8224Component', () => {
  it('should add', () => {
    expect(new Cmp8224Component().add8224(1)).toBe(8225);
  });
});