
import { Cmp5250Component } from './cmp';
describe('Cmp5250Component', () => {
  it('should add', () => {
    expect(new Cmp5250Component().add5250(1)).toBe(5251);
  });
});