
import { Cmp7592Component } from './cmp';
describe('Cmp7592Component', () => {
  it('should add', () => {
    expect(new Cmp7592Component().add7592(1)).toBe(7593);
  });
});