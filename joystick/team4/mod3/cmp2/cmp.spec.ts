
import { Cmp9432Component } from './cmp';
describe('Cmp9432Component', () => {
  it('should add', () => {
    expect(new Cmp9432Component().add9432(1)).toBe(9433);
  });
});