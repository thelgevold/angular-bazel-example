
import { Cmp7112Component } from './cmp';
describe('Cmp7112Component', () => {
  it('should add', () => {
    expect(new Cmp7112Component().add7112(1)).toBe(7113);
  });
});