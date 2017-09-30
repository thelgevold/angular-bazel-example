
import { Cmp9845Component } from './cmp';
describe('Cmp9845Component', () => {
  it('should add', () => {
    expect(new Cmp9845Component().add9845(1)).toBe(9846);
  });
});