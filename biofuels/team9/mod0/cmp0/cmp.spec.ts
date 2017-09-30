
import { Cmp1900Component } from './cmp';
describe('Cmp1900Component', () => {
  it('should add', () => {
    expect(new Cmp1900Component().add1900(1)).toBe(1901);
  });
});