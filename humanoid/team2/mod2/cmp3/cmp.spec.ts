
import { Cmp7223Component } from './cmp';
describe('Cmp7223Component', () => {
  it('should add', () => {
    expect(new Cmp7223Component().add7223(1)).toBe(7224);
  });
});