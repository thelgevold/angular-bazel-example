
import { Cmp9872Component } from './cmp';
describe('Cmp9872Component', () => {
  it('should add', () => {
    expect(new Cmp9872Component().add9872(1)).toBe(9873);
  });
});