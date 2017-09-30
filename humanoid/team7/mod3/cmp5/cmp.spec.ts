
import { Cmp7735Component } from './cmp';
describe('Cmp7735Component', () => {
  it('should add', () => {
    expect(new Cmp7735Component().add7735(1)).toBe(7736);
  });
});