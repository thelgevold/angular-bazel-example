
import { Cmp7584Component } from './cmp';
describe('Cmp7584Component', () => {
  it('should add', () => {
    expect(new Cmp7584Component().add7584(1)).toBe(7585);
  });
});