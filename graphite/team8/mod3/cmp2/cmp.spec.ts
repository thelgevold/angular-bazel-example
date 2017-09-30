
import { Cmp6832Component } from './cmp';
describe('Cmp6832Component', () => {
  it('should add', () => {
    expect(new Cmp6832Component().add6832(1)).toBe(6833);
  });
});