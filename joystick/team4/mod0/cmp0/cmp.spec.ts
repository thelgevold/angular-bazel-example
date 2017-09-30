
import { Cmp9400Component } from './cmp';
describe('Cmp9400Component', () => {
  it('should add', () => {
    expect(new Cmp9400Component().add9400(1)).toBe(9401);
  });
});