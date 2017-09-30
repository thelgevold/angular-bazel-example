
import { Cmp4712Component } from './cmp';
describe('Cmp4712Component', () => {
  it('should add', () => {
    expect(new Cmp4712Component().add4712(1)).toBe(4713);
  });
});