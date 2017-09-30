
import { Cmp9598Component } from './cmp';
describe('Cmp9598Component', () => {
  it('should add', () => {
    expect(new Cmp9598Component().add9598(1)).toBe(9599);
  });
});