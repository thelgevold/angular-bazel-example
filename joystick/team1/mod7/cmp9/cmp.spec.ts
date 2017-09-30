
import { Cmp9179Component } from './cmp';
describe('Cmp9179Component', () => {
  it('should add', () => {
    expect(new Cmp9179Component().add9179(1)).toBe(9180);
  });
});