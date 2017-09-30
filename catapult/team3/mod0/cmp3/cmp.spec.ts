
import { Cmp2303Component } from './cmp';
describe('Cmp2303Component', () => {
  it('should add', () => {
    expect(new Cmp2303Component().add2303(1)).toBe(2304);
  });
});