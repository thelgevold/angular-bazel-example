
import { Cmp7563Component } from './cmp';
describe('Cmp7563Component', () => {
  it('should add', () => {
    expect(new Cmp7563Component().add7563(1)).toBe(7564);
  });
});