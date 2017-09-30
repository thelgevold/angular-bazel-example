
import { Cmp7766Component } from './cmp';
describe('Cmp7766Component', () => {
  it('should add', () => {
    expect(new Cmp7766Component().add7766(1)).toBe(7767);
  });
});