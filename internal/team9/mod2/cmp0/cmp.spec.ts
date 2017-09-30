
import { Cmp8920Component } from './cmp';
describe('Cmp8920Component', () => {
  it('should add', () => {
    expect(new Cmp8920Component().add8920(1)).toBe(8921);
  });
});