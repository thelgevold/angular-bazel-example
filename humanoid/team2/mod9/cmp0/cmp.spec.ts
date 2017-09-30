
import { Cmp7290Component } from './cmp';
describe('Cmp7290Component', () => {
  it('should add', () => {
    expect(new Cmp7290Component().add7290(1)).toBe(7291);
  });
});