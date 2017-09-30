
import { Cmp2038Component } from './cmp';
describe('Cmp2038Component', () => {
  it('should add', () => {
    expect(new Cmp2038Component().add2038(1)).toBe(2039);
  });
});