
import { Cmp6677Component } from './cmp';
describe('Cmp6677Component', () => {
  it('should add', () => {
    expect(new Cmp6677Component().add6677(1)).toBe(6678);
  });
});