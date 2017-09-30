
import { Cmp7970Component } from './cmp';
describe('Cmp7970Component', () => {
  it('should add', () => {
    expect(new Cmp7970Component().add7970(1)).toBe(7971);
  });
});