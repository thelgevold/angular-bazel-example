
import { Cmp6645Component } from './cmp';
describe('Cmp6645Component', () => {
  it('should add', () => {
    expect(new Cmp6645Component().add6645(1)).toBe(6646);
  });
});