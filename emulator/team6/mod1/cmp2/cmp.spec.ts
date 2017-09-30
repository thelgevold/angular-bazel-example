
import { Cmp4612Component } from './cmp';
describe('Cmp4612Component', () => {
  it('should add', () => {
    expect(new Cmp4612Component().add4612(1)).toBe(4613);
  });
});