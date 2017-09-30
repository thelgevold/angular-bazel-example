
import { Cmp9374Component } from './cmp';
describe('Cmp9374Component', () => {
  it('should add', () => {
    expect(new Cmp9374Component().add9374(1)).toBe(9375);
  });
});