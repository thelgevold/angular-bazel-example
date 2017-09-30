
import { Cmp6472Component } from './cmp';
describe('Cmp6472Component', () => {
  it('should add', () => {
    expect(new Cmp6472Component().add6472(1)).toBe(6473);
  });
});