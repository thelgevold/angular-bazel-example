
import { Cmp9161Component } from './cmp';
describe('Cmp9161Component', () => {
  it('should add', () => {
    expect(new Cmp9161Component().add9161(1)).toBe(9162);
  });
});