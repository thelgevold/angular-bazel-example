
import { Cmp9913Component } from './cmp';
describe('Cmp9913Component', () => {
  it('should add', () => {
    expect(new Cmp9913Component().add9913(1)).toBe(9914);
  });
});