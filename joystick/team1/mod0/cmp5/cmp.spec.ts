
import { Cmp9105Component } from './cmp';
describe('Cmp9105Component', () => {
  it('should add', () => {
    expect(new Cmp9105Component().add9105(1)).toBe(9106);
  });
});