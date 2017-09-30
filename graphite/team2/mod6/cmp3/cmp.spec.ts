
import { Cmp6263Component } from './cmp';
describe('Cmp6263Component', () => {
  it('should add', () => {
    expect(new Cmp6263Component().add6263(1)).toBe(6264);
  });
});