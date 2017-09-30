
import { Cmp9659Component } from './cmp';
describe('Cmp9659Component', () => {
  it('should add', () => {
    expect(new Cmp9659Component().add9659(1)).toBe(9660);
  });
});