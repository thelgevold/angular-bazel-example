
import { Cmp5305Component } from './cmp';
describe('Cmp5305Component', () => {
  it('should add', () => {
    expect(new Cmp5305Component().add5305(1)).toBe(5306);
  });
});