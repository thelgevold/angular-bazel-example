
import { Cmp6882Component } from './cmp';
describe('Cmp6882Component', () => {
  it('should add', () => {
    expect(new Cmp6882Component().add6882(1)).toBe(6883);
  });
});