
import { Cmp3440Component } from './cmp';
describe('Cmp3440Component', () => {
  it('should add', () => {
    expect(new Cmp3440Component().add3440(1)).toBe(3441);
  });
});