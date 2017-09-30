
import { Cmp6976Component } from './cmp';
describe('Cmp6976Component', () => {
  it('should add', () => {
    expect(new Cmp6976Component().add6976(1)).toBe(6977);
  });
});