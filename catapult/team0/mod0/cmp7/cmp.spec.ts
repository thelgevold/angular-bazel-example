
import { Cmp2007Component } from './cmp';
describe('Cmp2007Component', () => {
  it('should add', () => {
    expect(new Cmp2007Component().add2007(1)).toBe(2008);
  });
});