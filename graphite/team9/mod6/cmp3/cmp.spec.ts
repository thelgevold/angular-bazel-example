
import { Cmp6963Component } from './cmp';
describe('Cmp6963Component', () => {
  it('should add', () => {
    expect(new Cmp6963Component().add6963(1)).toBe(6964);
  });
});