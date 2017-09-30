
import { Cmp2608Component } from './cmp';
describe('Cmp2608Component', () => {
  it('should add', () => {
    expect(new Cmp2608Component().add2608(1)).toBe(2609);
  });
});