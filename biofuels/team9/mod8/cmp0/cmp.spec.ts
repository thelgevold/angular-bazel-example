
import { Cmp1980Component } from './cmp';
describe('Cmp1980Component', () => {
  it('should add', () => {
    expect(new Cmp1980Component().add1980(1)).toBe(1981);
  });
});