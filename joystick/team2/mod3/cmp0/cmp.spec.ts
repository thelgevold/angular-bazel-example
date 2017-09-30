
import { Cmp9230Component } from './cmp';
describe('Cmp9230Component', () => {
  it('should add', () => {
    expect(new Cmp9230Component().add9230(1)).toBe(9231);
  });
});