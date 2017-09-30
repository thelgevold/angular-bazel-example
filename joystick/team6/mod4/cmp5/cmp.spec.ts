
import { Cmp9645Component } from './cmp';
describe('Cmp9645Component', () => {
  it('should add', () => {
    expect(new Cmp9645Component().add9645(1)).toBe(9646);
  });
});