
import { Cmp1064Component } from './cmp';
describe('Cmp1064Component', () => {
  it('should add', () => {
    expect(new Cmp1064Component().add1064(1)).toBe(1065);
  });
});