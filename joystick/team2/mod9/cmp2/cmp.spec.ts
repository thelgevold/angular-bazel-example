
import { Cmp9292Component } from './cmp';
describe('Cmp9292Component', () => {
  it('should add', () => {
    expect(new Cmp9292Component().add9292(1)).toBe(9293);
  });
});