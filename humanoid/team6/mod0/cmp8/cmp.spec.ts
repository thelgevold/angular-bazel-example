
import { Cmp7608Component } from './cmp';
describe('Cmp7608Component', () => {
  it('should add', () => {
    expect(new Cmp7608Component().add7608(1)).toBe(7609);
  });
});