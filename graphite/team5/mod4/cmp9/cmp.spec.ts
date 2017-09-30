
import { Cmp6549Component } from './cmp';
describe('Cmp6549Component', () => {
  it('should add', () => {
    expect(new Cmp6549Component().add6549(1)).toBe(6550);
  });
});