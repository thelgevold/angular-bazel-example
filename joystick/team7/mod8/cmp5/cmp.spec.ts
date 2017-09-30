
import { Cmp9785Component } from './cmp';
describe('Cmp9785Component', () => {
  it('should add', () => {
    expect(new Cmp9785Component().add9785(1)).toBe(9786);
  });
});