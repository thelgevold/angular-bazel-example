
import { Cmp6910Component } from './cmp';
describe('Cmp6910Component', () => {
  it('should add', () => {
    expect(new Cmp6910Component().add6910(1)).toBe(6911);
  });
});