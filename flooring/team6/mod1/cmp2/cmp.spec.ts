
import { Cmp5612Component } from './cmp';
describe('Cmp5612Component', () => {
  it('should add', () => {
    expect(new Cmp5612Component().add5612(1)).toBe(5613);
  });
});