
import { Cmp9881Component } from './cmp';
describe('Cmp9881Component', () => {
  it('should add', () => {
    expect(new Cmp9881Component().add9881(1)).toBe(9882);
  });
});