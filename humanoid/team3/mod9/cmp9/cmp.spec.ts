
import { Cmp7399Component } from './cmp';
describe('Cmp7399Component', () => {
  it('should add', () => {
    expect(new Cmp7399Component().add7399(1)).toBe(7400);
  });
});