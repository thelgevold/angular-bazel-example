
import { Cmp6376Component } from './cmp';
describe('Cmp6376Component', () => {
  it('should add', () => {
    expect(new Cmp6376Component().add6376(1)).toBe(6377);
  });
});