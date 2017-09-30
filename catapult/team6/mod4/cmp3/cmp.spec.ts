
import { Cmp2643Component } from './cmp';
describe('Cmp2643Component', () => {
  it('should add', () => {
    expect(new Cmp2643Component().add2643(1)).toBe(2644);
  });
});