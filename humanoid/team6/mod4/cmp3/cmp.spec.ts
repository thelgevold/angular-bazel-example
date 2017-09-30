
import { Cmp7643Component } from './cmp';
describe('Cmp7643Component', () => {
  it('should add', () => {
    expect(new Cmp7643Component().add7643(1)).toBe(7644);
  });
});