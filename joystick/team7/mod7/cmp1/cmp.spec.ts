
import { Cmp9771Component } from './cmp';
describe('Cmp9771Component', () => {
  it('should add', () => {
    expect(new Cmp9771Component().add9771(1)).toBe(9772);
  });
});