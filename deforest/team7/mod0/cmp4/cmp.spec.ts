
import { Cmp3704Component } from './cmp';
describe('Cmp3704Component', () => {
  it('should add', () => {
    expect(new Cmp3704Component().add3704(1)).toBe(3705);
  });
});