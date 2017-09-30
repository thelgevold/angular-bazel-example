
import { Cmp5085Component } from './cmp';
describe('Cmp5085Component', () => {
  it('should add', () => {
    expect(new Cmp5085Component().add5085(1)).toBe(5086);
  });
});