
import { Cmp6941Component } from './cmp';
describe('Cmp6941Component', () => {
  it('should add', () => {
    expect(new Cmp6941Component().add6941(1)).toBe(6942);
  });
});