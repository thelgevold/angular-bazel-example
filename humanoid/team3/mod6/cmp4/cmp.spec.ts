
import { Cmp7364Component } from './cmp';
describe('Cmp7364Component', () => {
  it('should add', () => {
    expect(new Cmp7364Component().add7364(1)).toBe(7365);
  });
});