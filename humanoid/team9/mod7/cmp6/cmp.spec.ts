
import { Cmp7976Component } from './cmp';
describe('Cmp7976Component', () => {
  it('should add', () => {
    expect(new Cmp7976Component().add7976(1)).toBe(7977);
  });
});