
import { Cmp4512Component } from './cmp';
describe('Cmp4512Component', () => {
  it('should add', () => {
    expect(new Cmp4512Component().add4512(1)).toBe(4513);
  });
});