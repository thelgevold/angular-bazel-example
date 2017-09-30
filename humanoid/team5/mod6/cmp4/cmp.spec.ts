
import { Cmp7564Component } from './cmp';
describe('Cmp7564Component', () => {
  it('should add', () => {
    expect(new Cmp7564Component().add7564(1)).toBe(7565);
  });
});