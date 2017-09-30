
import { Cmp9618Component } from './cmp';
describe('Cmp9618Component', () => {
  it('should add', () => {
    expect(new Cmp9618Component().add9618(1)).toBe(9619);
  });
});