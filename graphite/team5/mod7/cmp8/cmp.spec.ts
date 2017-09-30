
import { Cmp6578Component } from './cmp';
describe('Cmp6578Component', () => {
  it('should add', () => {
    expect(new Cmp6578Component().add6578(1)).toBe(6579);
  });
});