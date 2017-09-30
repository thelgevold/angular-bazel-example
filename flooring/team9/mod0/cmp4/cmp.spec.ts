
import { Cmp5904Component } from './cmp';
describe('Cmp5904Component', () => {
  it('should add', () => {
    expect(new Cmp5904Component().add5904(1)).toBe(5905);
  });
});