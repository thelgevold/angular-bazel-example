
import { Cmp9626Component } from './cmp';
describe('Cmp9626Component', () => {
  it('should add', () => {
    expect(new Cmp9626Component().add9626(1)).toBe(9627);
  });
});