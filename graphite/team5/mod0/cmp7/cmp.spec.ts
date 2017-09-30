
import { Cmp6507Component } from './cmp';
describe('Cmp6507Component', () => {
  it('should add', () => {
    expect(new Cmp6507Component().add6507(1)).toBe(6508);
  });
});