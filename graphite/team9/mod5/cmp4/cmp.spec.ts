
import { Cmp6954Component } from './cmp';
describe('Cmp6954Component', () => {
  it('should add', () => {
    expect(new Cmp6954Component().add6954(1)).toBe(6955);
  });
});