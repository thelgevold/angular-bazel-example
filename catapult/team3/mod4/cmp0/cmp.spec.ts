
import { Cmp2340Component } from './cmp';
describe('Cmp2340Component', () => {
  it('should add', () => {
    expect(new Cmp2340Component().add2340(1)).toBe(2341);
  });
});