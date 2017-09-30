
import { Cmp8729Component } from './cmp';
describe('Cmp8729Component', () => {
  it('should add', () => {
    expect(new Cmp8729Component().add8729(1)).toBe(8730);
  });
});