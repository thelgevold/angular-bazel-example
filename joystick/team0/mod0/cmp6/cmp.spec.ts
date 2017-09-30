
import { Cmp9006Component } from './cmp';
describe('Cmp9006Component', () => {
  it('should add', () => {
    expect(new Cmp9006Component().add9006(1)).toBe(9007);
  });
});