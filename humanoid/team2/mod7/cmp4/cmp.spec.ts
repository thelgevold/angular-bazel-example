
import { Cmp7274Component } from './cmp';
describe('Cmp7274Component', () => {
  it('should add', () => {
    expect(new Cmp7274Component().add7274(1)).toBe(7275);
  });
});