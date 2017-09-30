
import { Cmp5922Component } from './cmp';
describe('Cmp5922Component', () => {
  it('should add', () => {
    expect(new Cmp5922Component().add5922(1)).toBe(5923);
  });
});