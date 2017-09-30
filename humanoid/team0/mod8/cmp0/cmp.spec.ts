
import { Cmp7080Component } from './cmp';
describe('Cmp7080Component', () => {
  it('should add', () => {
    expect(new Cmp7080Component().add7080(1)).toBe(7081);
  });
});