
import { Cmp9151Component } from './cmp';
describe('Cmp9151Component', () => {
  it('should add', () => {
    expect(new Cmp9151Component().add9151(1)).toBe(9152);
  });
});