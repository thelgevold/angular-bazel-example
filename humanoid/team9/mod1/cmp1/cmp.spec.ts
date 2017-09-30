
import { Cmp7911Component } from './cmp';
describe('Cmp7911Component', () => {
  it('should add', () => {
    expect(new Cmp7911Component().add7911(1)).toBe(7912);
  });
});