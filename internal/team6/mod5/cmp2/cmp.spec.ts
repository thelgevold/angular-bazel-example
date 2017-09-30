
import { Cmp8652Component } from './cmp';
describe('Cmp8652Component', () => {
  it('should add', () => {
    expect(new Cmp8652Component().add8652(1)).toBe(8653);
  });
});