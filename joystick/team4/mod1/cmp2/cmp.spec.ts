
import { Cmp9412Component } from './cmp';
describe('Cmp9412Component', () => {
  it('should add', () => {
    expect(new Cmp9412Component().add9412(1)).toBe(9413);
  });
});