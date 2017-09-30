
import { Cmp6833Component } from './cmp';
describe('Cmp6833Component', () => {
  it('should add', () => {
    expect(new Cmp6833Component().add6833(1)).toBe(6834);
  });
});