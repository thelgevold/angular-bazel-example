
import { Cmp9880Component } from './cmp';
describe('Cmp9880Component', () => {
  it('should add', () => {
    expect(new Cmp9880Component().add9880(1)).toBe(9881);
  });
});