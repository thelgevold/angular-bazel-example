
import { Cmp6749Component } from './cmp';
describe('Cmp6749Component', () => {
  it('should add', () => {
    expect(new Cmp6749Component().add6749(1)).toBe(6750);
  });
});