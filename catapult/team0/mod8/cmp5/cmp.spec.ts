
import { Cmp2085Component } from './cmp';
describe('Cmp2085Component', () => {
  it('should add', () => {
    expect(new Cmp2085Component().add2085(1)).toBe(2086);
  });
});