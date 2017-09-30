
import { Cmp7512Component } from './cmp';
describe('Cmp7512Component', () => {
  it('should add', () => {
    expect(new Cmp7512Component().add7512(1)).toBe(7513);
  });
});