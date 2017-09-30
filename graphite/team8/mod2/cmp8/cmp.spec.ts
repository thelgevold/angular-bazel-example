
import { Cmp6828Component } from './cmp';
describe('Cmp6828Component', () => {
  it('should add', () => {
    expect(new Cmp6828Component().add6828(1)).toBe(6829);
  });
});