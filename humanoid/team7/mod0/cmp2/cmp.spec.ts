
import { Cmp7702Component } from './cmp';
describe('Cmp7702Component', () => {
  it('should add', () => {
    expect(new Cmp7702Component().add7702(1)).toBe(7703);
  });
});