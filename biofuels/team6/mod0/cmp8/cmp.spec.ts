
import { Cmp1608Component } from './cmp';
describe('Cmp1608Component', () => {
  it('should add', () => {
    expect(new Cmp1608Component().add1608(1)).toBe(1609);
  });
});