
import { Cmp9639Component } from './cmp';
describe('Cmp9639Component', () => {
  it('should add', () => {
    expect(new Cmp9639Component().add9639(1)).toBe(9640);
  });
});