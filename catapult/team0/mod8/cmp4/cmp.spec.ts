
import { Cmp2084Component } from './cmp';
describe('Cmp2084Component', () => {
  it('should add', () => {
    expect(new Cmp2084Component().add2084(1)).toBe(2085);
  });
});