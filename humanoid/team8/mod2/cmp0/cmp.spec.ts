
import { Cmp7820Component } from './cmp';
describe('Cmp7820Component', () => {
  it('should add', () => {
    expect(new Cmp7820Component().add7820(1)).toBe(7821);
  });
});