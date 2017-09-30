
import { Cmp5770Component } from './cmp';
describe('Cmp5770Component', () => {
  it('should add', () => {
    expect(new Cmp5770Component().add5770(1)).toBe(5771);
  });
});