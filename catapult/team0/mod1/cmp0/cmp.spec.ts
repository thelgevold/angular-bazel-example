
import { Cmp2010Component } from './cmp';
describe('Cmp2010Component', () => {
  it('should add', () => {
    expect(new Cmp2010Component().add2010(1)).toBe(2011);
  });
});