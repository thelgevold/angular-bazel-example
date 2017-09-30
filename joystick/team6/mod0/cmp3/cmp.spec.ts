
import { Cmp9603Component } from './cmp';
describe('Cmp9603Component', () => {
  it('should add', () => {
    expect(new Cmp9603Component().add9603(1)).toBe(9604);
  });
});