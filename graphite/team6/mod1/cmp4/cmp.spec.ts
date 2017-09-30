
import { Cmp6614Component } from './cmp';
describe('Cmp6614Component', () => {
  it('should add', () => {
    expect(new Cmp6614Component().add6614(1)).toBe(6615);
  });
});