
import { Cmp4608Component } from './cmp';
describe('Cmp4608Component', () => {
  it('should add', () => {
    expect(new Cmp4608Component().add4608(1)).toBe(4609);
  });
});