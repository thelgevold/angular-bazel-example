
import { Cmp9590Component } from './cmp';
describe('Cmp9590Component', () => {
  it('should add', () => {
    expect(new Cmp9590Component().add9590(1)).toBe(9591);
  });
});