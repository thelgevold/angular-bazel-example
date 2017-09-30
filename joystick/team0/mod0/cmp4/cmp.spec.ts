
import { Cmp9004Component } from './cmp';
describe('Cmp9004Component', () => {
  it('should add', () => {
    expect(new Cmp9004Component().add9004(1)).toBe(9005);
  });
});