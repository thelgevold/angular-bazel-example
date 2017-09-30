
import { Cmp6646Component } from './cmp';
describe('Cmp6646Component', () => {
  it('should add', () => {
    expect(new Cmp6646Component().add6646(1)).toBe(6647);
  });
});