
import { Cmp9113Component } from './cmp';
describe('Cmp9113Component', () => {
  it('should add', () => {
    expect(new Cmp9113Component().add9113(1)).toBe(9114);
  });
});