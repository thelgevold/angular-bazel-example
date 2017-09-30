
import { Cmp1050Component } from './cmp';
describe('Cmp1050Component', () => {
  it('should add', () => {
    expect(new Cmp1050Component().add1050(1)).toBe(1051);
  });
});