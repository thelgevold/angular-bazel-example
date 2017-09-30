
import { Cmp3085Component } from './cmp';
describe('Cmp3085Component', () => {
  it('should add', () => {
    expect(new Cmp3085Component().add3085(1)).toBe(3086);
  });
});