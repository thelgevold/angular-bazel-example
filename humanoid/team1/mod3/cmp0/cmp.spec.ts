
import { Cmp7130Component } from './cmp';
describe('Cmp7130Component', () => {
  it('should add', () => {
    expect(new Cmp7130Component().add7130(1)).toBe(7131);
  });
});