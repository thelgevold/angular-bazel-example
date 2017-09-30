
import { Cmp6649Component } from './cmp';
describe('Cmp6649Component', () => {
  it('should add', () => {
    expect(new Cmp6649Component().add6649(1)).toBe(6650);
  });
});