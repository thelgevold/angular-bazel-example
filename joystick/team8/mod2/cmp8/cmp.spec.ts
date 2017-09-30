
import { Cmp9828Component } from './cmp';
describe('Cmp9828Component', () => {
  it('should add', () => {
    expect(new Cmp9828Component().add9828(1)).toBe(9829);
  });
});