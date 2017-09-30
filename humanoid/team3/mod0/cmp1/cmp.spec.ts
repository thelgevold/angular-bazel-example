
import { Cmp7301Component } from './cmp';
describe('Cmp7301Component', () => {
  it('should add', () => {
    expect(new Cmp7301Component().add7301(1)).toBe(7302);
  });
});