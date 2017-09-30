
import { Cmp5307Component } from './cmp';
describe('Cmp5307Component', () => {
  it('should add', () => {
    expect(new Cmp5307Component().add5307(1)).toBe(5308);
  });
});