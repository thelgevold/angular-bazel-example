
import { Cmp6964Component } from './cmp';
describe('Cmp6964Component', () => {
  it('should add', () => {
    expect(new Cmp6964Component().add6964(1)).toBe(6965);
  });
});