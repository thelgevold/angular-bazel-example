
import { Cmp6588Component } from './cmp';
describe('Cmp6588Component', () => {
  it('should add', () => {
    expect(new Cmp6588Component().add6588(1)).toBe(6589);
  });
});