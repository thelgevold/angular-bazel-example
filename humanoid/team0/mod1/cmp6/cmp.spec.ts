
import { Cmp7016Component } from './cmp';
describe('Cmp7016Component', () => {
  it('should add', () => {
    expect(new Cmp7016Component().add7016(1)).toBe(7017);
  });
});