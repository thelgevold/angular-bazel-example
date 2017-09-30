
import { Cmp7828Component } from './cmp';
describe('Cmp7828Component', () => {
  it('should add', () => {
    expect(new Cmp7828Component().add7828(1)).toBe(7829);
  });
});