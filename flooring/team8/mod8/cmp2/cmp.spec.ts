
import { Cmp5882Component } from './cmp';
describe('Cmp5882Component', () => {
  it('should add', () => {
    expect(new Cmp5882Component().add5882(1)).toBe(5883);
  });
});