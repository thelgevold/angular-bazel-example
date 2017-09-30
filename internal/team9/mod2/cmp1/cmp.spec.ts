
import { Cmp8921Component } from './cmp';
describe('Cmp8921Component', () => {
  it('should add', () => {
    expect(new Cmp8921Component().add8921(1)).toBe(8922);
  });
});