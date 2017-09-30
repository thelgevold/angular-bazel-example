
import { Cmp6741Component } from './cmp';
describe('Cmp6741Component', () => {
  it('should add', () => {
    expect(new Cmp6741Component().add6741(1)).toBe(6742);
  });
});