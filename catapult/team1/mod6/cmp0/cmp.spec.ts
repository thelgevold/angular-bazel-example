
import { Cmp2160Component } from './cmp';
describe('Cmp2160Component', () => {
  it('should add', () => {
    expect(new Cmp2160Component().add2160(1)).toBe(2161);
  });
});