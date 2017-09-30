
import { Cmp2360Component } from './cmp';
describe('Cmp2360Component', () => {
  it('should add', () => {
    expect(new Cmp2360Component().add2360(1)).toBe(2361);
  });
});