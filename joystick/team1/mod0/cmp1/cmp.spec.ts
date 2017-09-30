
import { Cmp9101Component } from './cmp';
describe('Cmp9101Component', () => {
  it('should add', () => {
    expect(new Cmp9101Component().add9101(1)).toBe(9102);
  });
});