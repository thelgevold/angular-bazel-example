
import { Cmp6297Component } from './cmp';
describe('Cmp6297Component', () => {
  it('should add', () => {
    expect(new Cmp6297Component().add6297(1)).toBe(6298);
  });
});