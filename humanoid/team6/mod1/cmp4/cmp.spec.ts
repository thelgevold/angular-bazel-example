
import { Cmp7614Component } from './cmp';
describe('Cmp7614Component', () => {
  it('should add', () => {
    expect(new Cmp7614Component().add7614(1)).toBe(7615);
  });
});