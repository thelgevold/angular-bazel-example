
import { Cmp2000Component } from './cmp';
describe('Cmp2000Component', () => {
  it('should add', () => {
    expect(new Cmp2000Component().add2000(1)).toBe(2001);
  });
});