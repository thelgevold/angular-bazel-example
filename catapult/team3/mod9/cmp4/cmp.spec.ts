
import { Cmp2394Component } from './cmp';
describe('Cmp2394Component', () => {
  it('should add', () => {
    expect(new Cmp2394Component().add2394(1)).toBe(2395);
  });
});