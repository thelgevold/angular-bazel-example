
import { Cmp9822Component } from './cmp';
describe('Cmp9822Component', () => {
  it('should add', () => {
    expect(new Cmp9822Component().add9822(1)).toBe(9823);
  });
});