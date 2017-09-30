
import { Cmp7595Component } from './cmp';
describe('Cmp7595Component', () => {
  it('should add', () => {
    expect(new Cmp7595Component().add7595(1)).toBe(7596);
  });
});