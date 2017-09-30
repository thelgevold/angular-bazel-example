
import { Cmp9612Component } from './cmp';
describe('Cmp9612Component', () => {
  it('should add', () => {
    expect(new Cmp9612Component().add9612(1)).toBe(9613);
  });
});