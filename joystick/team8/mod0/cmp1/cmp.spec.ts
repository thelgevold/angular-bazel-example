
import { Cmp9801Component } from './cmp';
describe('Cmp9801Component', () => {
  it('should add', () => {
    expect(new Cmp9801Component().add9801(1)).toBe(9802);
  });
});