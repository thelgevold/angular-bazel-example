
import { Cmp7219Component } from './cmp';
describe('Cmp7219Component', () => {
  it('should add', () => {
    expect(new Cmp7219Component().add7219(1)).toBe(7220);
  });
});