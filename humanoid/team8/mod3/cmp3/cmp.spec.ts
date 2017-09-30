
import { Cmp7833Component } from './cmp';
describe('Cmp7833Component', () => {
  it('should add', () => {
    expect(new Cmp7833Component().add7833(1)).toBe(7834);
  });
});