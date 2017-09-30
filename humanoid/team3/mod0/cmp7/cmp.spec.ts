
import { Cmp7307Component } from './cmp';
describe('Cmp7307Component', () => {
  it('should add', () => {
    expect(new Cmp7307Component().add7307(1)).toBe(7308);
  });
});