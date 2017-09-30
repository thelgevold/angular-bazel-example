
import { Cmp5383Component } from './cmp';
describe('Cmp5383Component', () => {
  it('should add', () => {
    expect(new Cmp5383Component().add5383(1)).toBe(5384);
  });
});