
import { Cmp7085Component } from './cmp';
describe('Cmp7085Component', () => {
  it('should add', () => {
    expect(new Cmp7085Component().add7085(1)).toBe(7086);
  });
});