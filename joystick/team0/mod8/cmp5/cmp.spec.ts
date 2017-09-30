
import { Cmp9085Component } from './cmp';
describe('Cmp9085Component', () => {
  it('should add', () => {
    expect(new Cmp9085Component().add9085(1)).toBe(9086);
  });
});