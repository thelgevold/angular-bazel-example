
import { Cmp2083Component } from './cmp';
describe('Cmp2083Component', () => {
  it('should add', () => {
    expect(new Cmp2083Component().add2083(1)).toBe(2084);
  });
});