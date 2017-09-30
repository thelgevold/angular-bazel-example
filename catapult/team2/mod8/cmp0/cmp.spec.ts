
import { Cmp2280Component } from './cmp';
describe('Cmp2280Component', () => {
  it('should add', () => {
    expect(new Cmp2280Component().add2280(1)).toBe(2281);
  });
});