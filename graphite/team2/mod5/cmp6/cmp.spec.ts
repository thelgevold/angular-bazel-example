
import { Cmp6256Component } from './cmp';
describe('Cmp6256Component', () => {
  it('should add', () => {
    expect(new Cmp6256Component().add6256(1)).toBe(6257);
  });
});