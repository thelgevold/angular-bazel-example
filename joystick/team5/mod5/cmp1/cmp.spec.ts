
import { Cmp9551Component } from './cmp';
describe('Cmp9551Component', () => {
  it('should add', () => {
    expect(new Cmp9551Component().add9551(1)).toBe(9552);
  });
});