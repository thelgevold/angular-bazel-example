
import { Cmp6575Component } from './cmp';
describe('Cmp6575Component', () => {
  it('should add', () => {
    expect(new Cmp6575Component().add6575(1)).toBe(6576);
  });
});