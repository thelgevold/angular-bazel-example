
import { Cmp5401Component } from './cmp';
describe('Cmp5401Component', () => {
  it('should add', () => {
    expect(new Cmp5401Component().add5401(1)).toBe(5402);
  });
});