
import { Cmp9683Component } from './cmp';
describe('Cmp9683Component', () => {
  it('should add', () => {
    expect(new Cmp9683Component().add9683(1)).toBe(9684);
  });
});