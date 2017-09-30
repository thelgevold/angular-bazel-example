
import { Cmp9031Component } from './cmp';
describe('Cmp9031Component', () => {
  it('should add', () => {
    expect(new Cmp9031Component().add9031(1)).toBe(9032);
  });
});