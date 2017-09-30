
import { Cmp6480Component } from './cmp';
describe('Cmp6480Component', () => {
  it('should add', () => {
    expect(new Cmp6480Component().add6480(1)).toBe(6481);
  });
});