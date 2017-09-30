
import { Cmp7254Component } from './cmp';
describe('Cmp7254Component', () => {
  it('should add', () => {
    expect(new Cmp7254Component().add7254(1)).toBe(7255);
  });
});