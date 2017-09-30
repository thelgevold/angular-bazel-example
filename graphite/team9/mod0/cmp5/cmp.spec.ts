
import { Cmp6905Component } from './cmp';
describe('Cmp6905Component', () => {
  it('should add', () => {
    expect(new Cmp6905Component().add6905(1)).toBe(6906);
  });
});