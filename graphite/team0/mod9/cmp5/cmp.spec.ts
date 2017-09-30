
import { Cmp6095Component } from './cmp';
describe('Cmp6095Component', () => {
  it('should add', () => {
    expect(new Cmp6095Component().add6095(1)).toBe(6096);
  });
});