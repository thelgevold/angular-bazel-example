
import { Cmp5980Component } from './cmp';
describe('Cmp5980Component', () => {
  it('should add', () => {
    expect(new Cmp5980Component().add5980(1)).toBe(5981);
  });
});