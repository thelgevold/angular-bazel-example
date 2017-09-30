
import { Cmp7920Component } from './cmp';
describe('Cmp7920Component', () => {
  it('should add', () => {
    expect(new Cmp7920Component().add7920(1)).toBe(7921);
  });
});