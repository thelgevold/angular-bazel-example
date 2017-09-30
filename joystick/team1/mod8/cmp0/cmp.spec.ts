
import { Cmp9180Component } from './cmp';
describe('Cmp9180Component', () => {
  it('should add', () => {
    expect(new Cmp9180Component().add9180(1)).toBe(9181);
  });
});