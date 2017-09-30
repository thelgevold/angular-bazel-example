
import { Cmp9408Component } from './cmp';
describe('Cmp9408Component', () => {
  it('should add', () => {
    expect(new Cmp9408Component().add9408(1)).toBe(9409);
  });
});