
import { Cmp8523Component } from './cmp';
describe('Cmp8523Component', () => {
  it('should add', () => {
    expect(new Cmp8523Component().add8523(1)).toBe(8524);
  });
});