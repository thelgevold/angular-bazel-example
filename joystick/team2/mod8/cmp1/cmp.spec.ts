
import { Cmp9281Component } from './cmp';
describe('Cmp9281Component', () => {
  it('should add', () => {
    expect(new Cmp9281Component().add9281(1)).toBe(9282);
  });
});