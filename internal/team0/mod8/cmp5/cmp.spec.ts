
import { Cmp8085Component } from './cmp';
describe('Cmp8085Component', () => {
  it('should add', () => {
    expect(new Cmp8085Component().add8085(1)).toBe(8086);
  });
});