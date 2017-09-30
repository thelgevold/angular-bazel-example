
import { Cmp5608Component } from './cmp';
describe('Cmp5608Component', () => {
  it('should add', () => {
    expect(new Cmp5608Component().add5608(1)).toBe(5609);
  });
});