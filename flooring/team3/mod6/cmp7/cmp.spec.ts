
import { Cmp5367Component } from './cmp';
describe('Cmp5367Component', () => {
  it('should add', () => {
    expect(new Cmp5367Component().add5367(1)).toBe(5368);
  });
});