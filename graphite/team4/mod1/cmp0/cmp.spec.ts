
import { Cmp6410Component } from './cmp';
describe('Cmp6410Component', () => {
  it('should add', () => {
    expect(new Cmp6410Component().add6410(1)).toBe(6411);
  });
});