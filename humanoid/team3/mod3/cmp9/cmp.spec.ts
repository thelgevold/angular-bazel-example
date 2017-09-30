
import { Cmp7339Component } from './cmp';
describe('Cmp7339Component', () => {
  it('should add', () => {
    expect(new Cmp7339Component().add7339(1)).toBe(7340);
  });
});