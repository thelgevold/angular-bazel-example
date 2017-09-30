
import { Cmp9192Component } from './cmp';
describe('Cmp9192Component', () => {
  it('should add', () => {
    expect(new Cmp9192Component().add9192(1)).toBe(9193);
  });
});