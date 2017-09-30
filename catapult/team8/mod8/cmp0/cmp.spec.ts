
import { Cmp2880Component } from './cmp';
describe('Cmp2880Component', () => {
  it('should add', () => {
    expect(new Cmp2880Component().add2880(1)).toBe(2881);
  });
});