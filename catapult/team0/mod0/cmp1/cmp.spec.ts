
import { Cmp2001Component } from './cmp';
describe('Cmp2001Component', () => {
  it('should add', () => {
    expect(new Cmp2001Component().add2001(1)).toBe(2002);
  });
});