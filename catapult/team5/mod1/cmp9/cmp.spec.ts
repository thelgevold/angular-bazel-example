
import { Cmp2519Component } from './cmp';
describe('Cmp2519Component', () => {
  it('should add', () => {
    expect(new Cmp2519Component().add2519(1)).toBe(2520);
  });
});