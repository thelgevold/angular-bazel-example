
import { Cmp3608Component } from './cmp';
describe('Cmp3608Component', () => {
  it('should add', () => {
    expect(new Cmp3608Component().add3608(1)).toBe(3609);
  });
});