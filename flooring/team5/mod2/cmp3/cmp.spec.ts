
import { Cmp5523Component } from './cmp';
describe('Cmp5523Component', () => {
  it('should add', () => {
    expect(new Cmp5523Component().add5523(1)).toBe(5524);
  });
});