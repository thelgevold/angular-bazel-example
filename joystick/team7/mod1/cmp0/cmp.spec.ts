
import { Cmp9710Component } from './cmp';
describe('Cmp9710Component', () => {
  it('should add', () => {
    expect(new Cmp9710Component().add9710(1)).toBe(9711);
  });
});