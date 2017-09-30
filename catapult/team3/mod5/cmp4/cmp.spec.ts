
import { Cmp2354Component } from './cmp';
describe('Cmp2354Component', () => {
  it('should add', () => {
    expect(new Cmp2354Component().add2354(1)).toBe(2355);
  });
});