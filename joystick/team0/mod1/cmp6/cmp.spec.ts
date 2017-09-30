
import { Cmp9016Component } from './cmp';
describe('Cmp9016Component', () => {
  it('should add', () => {
    expect(new Cmp9016Component().add9016(1)).toBe(9017);
  });
});