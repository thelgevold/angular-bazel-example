
import { Cmp2055Component } from './cmp';
describe('Cmp2055Component', () => {
  it('should add', () => {
    expect(new Cmp2055Component().add2055(1)).toBe(2056);
  });
});