
import { Cmp6508Component } from './cmp';
describe('Cmp6508Component', () => {
  it('should add', () => {
    expect(new Cmp6508Component().add6508(1)).toBe(6509);
  });
});