
import { Cmp6134Component } from './cmp';
describe('Cmp6134Component', () => {
  it('should add', () => {
    expect(new Cmp6134Component().add6134(1)).toBe(6135);
  });
});