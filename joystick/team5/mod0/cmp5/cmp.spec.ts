
import { Cmp9505Component } from './cmp';
describe('Cmp9505Component', () => {
  it('should add', () => {
    expect(new Cmp9505Component().add9505(1)).toBe(9506);
  });
});