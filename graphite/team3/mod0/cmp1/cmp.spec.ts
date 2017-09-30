
import { Cmp6301Component } from './cmp';
describe('Cmp6301Component', () => {
  it('should add', () => {
    expect(new Cmp6301Component().add6301(1)).toBe(6302);
  });
});