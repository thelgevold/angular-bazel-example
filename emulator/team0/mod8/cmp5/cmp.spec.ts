
import { Cmp4085Component } from './cmp';
describe('Cmp4085Component', () => {
  it('should add', () => {
    expect(new Cmp4085Component().add4085(1)).toBe(4086);
  });
});